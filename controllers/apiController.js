const amazonScraper = require('../scraper/amazonScraper');

async function getItem(req, res) {
    try {
        const url = req.query.url;
        const item = await amazonScraper.scrapeItem(url);
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getItemById(req, res) {
    try {
        const id = req.params.id;
        const url = `https://www.amazon.com/dp/${id}`;
        const item = await amazonScraper.parseAmazonProductPage(url);
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getItem, getItemById
}