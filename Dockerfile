# Use an official Nodejs runtime as a parent image 
FROM node:14 

# Set the working directory inside the container 
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory 
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Run the app when the container launches
CMD ["node", "app.js"]

