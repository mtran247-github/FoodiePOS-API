// tests/api.test.js

const request = require('supertest');

const { app: serverApp, orders } = require('../server'); //server setup is in server.js



// Mock data

const burritos = {

"Chicken Burrito": {

"S": 2,

"regular": 3,

"XL": 5,

},

"Vegetarian Burrito": {

"S": 3,

"regular": 4,

"XL": 6

}

};





const orderItems = [

{ burrito: { name: "Chicken Burrito", size: "regular" }, quantity: 2 },

{ burrito: { name: "Vegetarian Burrito", size: "S" }, quantity: 1 }

];



const orderItemWithEmptyOrder = [];



// Tests for API endpoints

describe ('Testing burrito endpoint', () => {

test('GET /api/burrito', async () => {

const response = await request(serverApp).get('/api/burrito');

expect(response.body.statusCode).toBe(200);

expect(response.body.burritos).toEqual(burritos);

});

})



describe ('Testing order endpoint', () => {

test('POST /api/orders', async () => {

const response = await request(serverApp).post('/api/orders').send({ orderItems });

expect(response.statusCode).toBe(200);

expect(response.body.message).toContain("new order created");



// Check if the order is added to the orders object

const orderId = parseInt(response.body.message.match(/\d+/)[0]);

expect(orderId).toBeGreaterThanOrEqual(1);

expect(response.body.orders[orderId]).toBeTruthy();

});



test('POST /api/orders with empty order', async () => {

const response = await request(serverApp).post('/api/orders').send({ orderItems: orderItemWithEmptyOrder });

console.log(response.body);

expect(response.body.statusCode).toBe(422);

expect(response.body.message).toBe("cannot submit an empty order");

});

})



describe('Testing orders/id endpoint', () => {

test('GET /api/orders/:id', async () => {

// Create a sample order for testing

const orderResponse = await request(serverApp).post('/api/orders').send({ orderItems });

const orderId = parseInt(orderResponse.body.message.match(/\d+/)[0]);



const response = await request(serverApp).get(`/api/orders/${orderId}`);

expect(response.body.statusCode).toBe(200);

expect(response.body.message).toContain(`order found with order details`);

});



test('GET /api/orders/:id with invalid order id', async () => {

const response = await request(serverApp).get('/api/orders/5');

expect(response.body.statusCode).toBe(404);

expect(response.body.message).toBe(`could not find the order with id: 5`);

});

});
