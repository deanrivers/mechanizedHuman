const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const Parser = require('rss-parser');
const parser = new Parser();

const fetchFeed = async () => {
  let feed = await parser.parseURL('https://phys.org/rss-feed/breaking/technology-news/');
  return feed
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', async (req, res) => {
  let feed = await fetchFeed()
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