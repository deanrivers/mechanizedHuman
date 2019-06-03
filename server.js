const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const Parser = require('rss-parser');
const parser = new Parser();

const fetchRSS = async (url) => {
  let feed = await parser.parseURL(url);
  return feed
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/fetchFeed', async (req, res) => {
  let physFeed = await fetchRSS('https://phys.org/rss-feed/breaking/technology-news/')
  let mitFeed = await fetchRSS('http://news.mit.edu/rss/topic/science-technology-and-society')
  let feed = {items: [...physFeed['items'], ...mitFeed['items']]}

  res.send(feed);
});

app.get('/api/fetchPhys', async (req, res) => {
  let feed = await fetchRSS('https://phys.org/rss-feed/breaking/technology-news/')
  res.send(feed);
});

app.get('/api/fetchMit', async (req, res) => {
  let feed = await fetchRSS('http://news.mit.edu/rss/topic/science-technology-and-society')
  console.log(feed)
  //res.send({ data: "tester" });
  res.send(feed);
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));