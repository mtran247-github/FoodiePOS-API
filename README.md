# FoodiePOS-API

FoodiePOS is a modern Point of Sale (POS) system backend designed to streamline operations and enhance customer experiences for quick-service restaurants. This repository contains the backend APIs necessary to support a front-end client for customers ordering food.

## Features
- API Endpoints: Provides a set of RESTful APIs to manage burrito products, orders, and order details.
- Burrito Products: Includes a list of burrito products with attributes such as name, size, and price.
- Order Management: Supports order submission, retrieval of orders, and details of individual orders.
- JSON Response: All endpoints return JSON responses for seamless integration with front-end clients.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Docker](https://www.docker.com/)

## Getting Started

Follow these instructions to get the project up and running.

1. Clone the Repository
   
git clone [git@github.com:mtran247/burrito-side-project.git](https://github.com/mtran247-github/BurritoShop.git)
```bash
cd burrito-side-project.git
```

3. Install Dependencies
```bash
npm install
```

4. Running the Server <br/>
a. Build Docker Image
```bash
docker-compose build
```
- Builds the Docker image for your server.

&emsp; &ensp; b. Start Docker Container
```bash
docker-compose up
```
- Starts the Docker container, exposes the port, and runs the server using npm run start.

4. Testing
- To Test API Endpoints: open a second terminal, go to this project's directory and run the commands below which also exists in example_commands.js. Check if the results are correct and as expected

```bash
curl -v -k http://localhost:3000/api/burrito -H 'Content-Type:application/json'
```

```bash
curl -X POST -d '{"orderItems":[{"burrito": {"name": "Chicken Burrito", "size": "regular"}, "quantity": 3}]}' -H 'Content-Type:application/json' http://localhost:3000/api/orders
```
```bash
curl -X POST -d '{"orderItems":[{"burrito": {"name": "Chicken Burrito", "size": "regular"}, "quantity": 3}, {"burrito": {"name": "Vegetarian Burrito", "size": "XL"}, "quantity": 30}]}' -H 'Content-Type:application/json' http://localhost:3000/api/orders
```

```bash
curl -v -k http://localhost:3000/api/orders/1 -H 'Content-Type:application/json'
```


- To run tests, use the following command:
```bash
npm test
```
- This will execute the test suite and provide information about the status of your API.


## Features
- Use the provided API endpoints to manage burrito products and process customer orders.
- Integrate FoodiePOS with front-end client applications and external systems using RESTful APIs.
- Leverage data insights from FoodiePOS to make informed decisions about menu offerings, pricing, and marketing strategies.


## Features to Improve FoodiePOS
1. **Order Tracking and Status Updates:**  WebSockets (for real-time communication), Redis (for caching order status) to enable real-time order tracking for customers and staff, allowing them to monitor the status of their orders from preparation to delivery
2. **Payment Integration:** Integrate payment gateways such as Stripe API, PayPal API, Braintree SDK to support online payments for orders
3. **Inventory Management:** PostgreSQL (for storing inventory data), WebSocket for real-time updates 


Feel free to explore the API endpoints and enjoy ordering delicious burritos!



