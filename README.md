# Burrito Shop

Welcome to the Burrito Shop project! This project allows you to manage and order delicious burritos through a simple API.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Docker](https://www.docker.com/)

## Getting Started

Follow these instructions to get the project up and running.

1. Clone the Repository
   
git clone git@github.com:mtran247/burrito-side-project.git
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


Feel free to explore the API endpoints and enjoy ordering delicious burritos!
