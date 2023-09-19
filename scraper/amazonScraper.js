const axios = require('axios');
const cheerio = require('cheerio');
const url = require('url');

const Bottleneck = require('bottleneck');

const limiter = new Bottleneck({
  maxConcurrent: 1, // Number of concurrent requests
  minTime: 1000,   // Minimum time (in milliseconds) between requests
});

async function scrapeItem(productUrl) {
  try {
    // Parse the product URL to extract the product ID
    const parsedUrl = url.parse(productUrl);
    const productID = parsedUrl.pathname.split('/dp/')[1];

    // Fetch the HTML content of the Amazon product page
    // const response = await axios.get(productUrl);
    const response = await limiter.schedule(() => axios.get(productUrl));

    // Load the HTML content into Cheerio for parsing
    const $ = cheerio.load(response.data);

    // Find the product title element
    const titleElement = $('#productTitle');

    // Extract the product title text from the first match
    const productTitle = titleElement.first().text().trim();

    // Find the price element
    const priceElement = $('.a-price .a-offscreen');

    // Extract the price text from the first match
    const priceText = priceElement.first().text().trim().replace('$', '');

    // Find the image element
    const imageElement = $('#landingImage');

    // Extract the image URL from the first match
    const imageUrl = imageElement.first().attr('src');

    // Create a JSON object with the product ID and price
    const productInfo = {
      productId: productID,
      price: priceText,
      productTitle: productTitle,
      imageUrl: imageUrl,
    };

    // Return the extracted product info as JSON
    return productInfo;
  } catch (error) {
    throw error;
  }
}

module.exports = {
    scrapeItem,
};
