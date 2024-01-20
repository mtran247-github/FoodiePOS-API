# Use an official Node.js runtime as a parent image
FROM node:14

RUN mkdir -p /usr/src/app

# Set the working directory in the container
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

# Expose the port your app will run on
EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "start"]
