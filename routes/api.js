// routes/api.js

const express = require('express');

const router = express.Router();



// Importing my entities

const entities = require('../entities.js');



// current order id, to be incremented each time an order is made

let currentOrderId = 1;



// API routes



// Placeholder data

//input from user

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

}



const orders = {};



// API endpoint to get a list of burrito products

// Should return: ("Chicken Burrito", "regular", 3), ("Vegetarian Burrito", "regular", 4)

router.get('/burrito', (req, res) => {

res.json({"statusCode": 200, "burritos": burritos});

});



// API endpoint to submit a new order

//naming the API endpoint /orders

router.post('/orders', (req, res) => {

let ordersResponse = {

statusCode: 0,

message: "",

orders: {}

}



// For simplicity, assume the request body contains an array of order items

//orderItems - extracting the data from the HTTP request body. When a client sends a POST request to the '/orders' endpoint, it includes data in the request body.

const orderItems = req.body.orderItems;

console.log("order items received: ", orderItems);



if (orderItems == undefined || orderItems.length == 0) {

ordersResponse.statusCode = 422;

ordersResponse.message = "cannot submit an empty order"

ordersResponse.orders = {}

res.json(ordersResponse)

}



// Create a new order based on the submitted items

//for each input the user gives us, find it in the burritos menu list created above and if found



let newOrder = new entities.Order();

newOrder.orderId = currentOrderId;



orderItems.forEach(function (item) {

newOrder.totalPrice += burritos[item.burrito.name][item.burrito.size] * item.quantity

newOrder.items.push(item);

});



orders[newOrder.orderId] = newOrder;

currentOrderId += 1;



ordersResponse.statusCode = 200;

ordersResponse.message = `new order created with order id ${newOrder.orderId} for a total price of $${newOrder.totalPrice} with order items: ${JSON.stringify(newOrder.items)}`

ordersResponse.orders = orders;



res.json(ordersResponse)

});



// API endpoint to get a list of orders

router.get('/orders/:id', (req, res) => {

let idResponse = {

statusCode: 0,

message: ""

}



const orderId = req.params.id;

console.log(JSON.stringify(orders))



const order = orders[orderId]

if (order == undefined) {

idResponse.statusCode = 404;

idResponse.message = `could not find the order with id: ${orderId}`

res.json(idResponse)

}



idResponse.statusCode = 200;

idResponse.message = `order found with order details: ${JSON.stringify(order)}`

res.json(idResponse);

});





module.exports = router;
