# Amazon Price Tracker (Node.js)

This repository contains a Node.js application that tracks product prices on Amazon.

## Features

- **Amazon Scraper**: Extracts product details such as title, price, and image URL from a given Amazon product page. [View Code](https://github.com/onggiahuy97/amazonpricetracker_nodejs/blob/main/scraper/amazonScraper.js)
  
- **API Endpoints**:
  - Get product details by providing a URL.
  - Get product details by providing a product ID. [View Code](https://github.com/onggiahuy97/amazonpricetracker_nodejs/blob/main/routes/api.js)
  
- **Error Handling**: A middleware to handle errors and send appropriate responses. [View Code](https://github.com/onggiahuy97/amazonpricetracker_nodejs/blob/main/middlewares/errorHandler.js)

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `node app.js`.

To build and run the application using Docker, follow these steps:

1. Build the Docker image for the application:

    ```shell
    docker build -t amazonpricetracker .
    ```

2. Run the Docker container, exposing port 3000:

    ```shell
    docker run -p 3000:3000 amazonpricetracker
    ```

The application will now be running and accessible at [http://localhost:3000](http://localhost:3000).
