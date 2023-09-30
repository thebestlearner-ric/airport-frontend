# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build your React app for production
RUN npm run build

# Expose the port your React app will run on (default is 3000)
EXPOSE 3000

# Define the command to start your React app
CMD ["npm", "start"]
