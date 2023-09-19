const axios = require('axios');
const cheerio = require('cheerio');
const url = require('url');

const Bottleneck = require('bottleneck');

const limiter = new Bottleneck({
  maxConcurrent: 1, // Number of concurrent requests
  minTime: 1000,   // Minimum time (in milliseconds) between requests
});

async function parseAmazonProductPage(productUrl) {
  try {
    const productID = extractProductID(productUrl);
    const response = await fetchAmazonProductPage(productUrl);
    const productInfo = {
      productId: productID,
      ...extractProductInfo(response.data),
    };

    return productInfo;
  } catch (error) {
    throw error;
  }
}

function extractProductID(productUrl) {
  const parsedUrl = url.parse(productUrl);
  return parsedUrl.pathname.split('/dp/')[1];
}

async function fetchAmazonProductPage(productUrl) {
  return limiter.schedule(() => axios.get(productUrl));
}

function extractProductInfo(htmlContent) {
  const $ = cheerio.load(htmlContent);

  const productTitle = $('#productTitle').first().text().trim();
  const priceText = $('.a-price .a-offscreen').first().text().trim().replace('$', '');
  const imageUrl = $('#landingImage').first().attr('src');

  return {
    productTitle,
    price: priceText,
    imageUrl,
  };
}


module.exports = {
  parseAmazonProductPage
};
