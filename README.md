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

## Docker Support

The repository also contains a Dockerfile to containerize the application. [View Dockerfile](https://github.com/onggiahuy97/amazonpricetracker_nodejs/blob/main/Dockerfile)

---

To build and run the application using Docker:

`docker build -t amazonpricetracker .`
`docker run -p 3000:3000 amazonpricetracker`