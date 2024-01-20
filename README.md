# Burrito Shop Project

Welcome to the Burrito Shop project! This project allows you to manage and order delicious burritos through a simple API.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Docker](https://www.docker.com/)

## Getting Started

Follow these instructions to get the project up and running.

### 1. Clone the Repository

```bash
git clone <REPLACE>
cd burrito-shop

### 2. Install Dependencies
npm install


### 3. Running the Server
a. Build Docker Image
docker-compose build
- Builds the Docker image for your server.

b. Start Docker Container
docker-compose up
- Starts the Docker container, exposes the port, and runs the server using npm run start.

### 4. Testing
- open a second terminal, and test if the API endpoints are working by running the each commands in example_commands.js
- To run tests, use the following command:
npm test
- This will execute the test suite and provide information about the status of your API.

Feel free to explore the API endpoints and enjoy ordering delicious burritos!
