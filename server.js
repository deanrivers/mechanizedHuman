const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const Parser = require('rss-parser');
const parser = new Parser();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const consumer_id = 'OcQDUeAf7BC5j8ihlmStZGWos'
const consumer_secret = 'pagB4Kdn4JqoPRfZulUIIumiGIV89KkqA1DulFlT6bPxR22Geu'

const credentials = {
  client: {
    id: consumer_id,
    secret: consumer_secret
  },
  auth: {
    tokenHost: 'https://api.twitter.com',
    tokenPath: '/oauth2/token',
    revokePath: '/oauth2/invalidate_token'
  }
};
// Initialize the OAuth2 Library
const oauth2 = require('simple-oauth2').create(credentials);
const tokenConfig = {
  scope: 'read',
};
 
// Twitter Timeline Endpoint
app.get('/api/fetchTimeline', async (req, res) => {

  let myData = []

  try {
    const result = await oauth2.clientCredentials.getToken(tokenConfig);
    const accessTokenObject = oauth2.accessToken.create(result);
    const accessToken = accessTokenObject.token['access_token']
    //const tokenBase64 = new Buffer(accessToken).toString('base64');
    const config = {
      headers: { 
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip'
      },
    }

    const response = await axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=mechanizedhuman&count=6', config)
    const data = await response.data

    myData = data

  } catch (error) {
    console.log('Access Token error', error.message);
  }

  res.send(myData);
});


const fetchRSS = async (url) => {
  let feed = await parser.parseURL(url);
  return feed
}

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