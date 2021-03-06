require('dotenv').config();
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const { Base64 } = require('js-base64')
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;
const consumer_id = process.env.REACT_APP_CONSUMER_ID
const consumer_secret = process.env.REACT_APP_CONSUMER_SECRET

const gmailClientID = process.env.REACT_APP_GMAIL_CONSUMER_ID
const gmailClientSecret = process.env.REACT_APP_GMAIL_CONSUMER_SECRET
const gmailRefreshToken = process.env.REACT_APP_GMAIL_REFRESH_TOKEN

const Parser = require('rss-parser');
const parser = new Parser({
  customFields: {
    item: [
      ['media:thumbnail', 'media'],
      ['media:content', 'media'],
  ]},
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const oauth2Client = new google.auth.OAuth2(
  gmailClientID,
  gmailClientSecret,
  ['http://localhost']
);

router.post('/sendMail', async (req, res) => {

  oauth2Client.setCredentials({
    refresh_token: gmailRefreshToken
  });

  try {

    const gmail = google.gmail({
      version: 'v1',
      auth: oauth2Client // specify your API key here
    });

    const makeBody = () => {
      var str = ["Content-Type: text/plain; charset=\"UTF-8\"\n",
        "MIME-Version: 1.0\n",
        "Content-Transfer-Encoding: 7bit\n",
        "to: ", "mechhummedia@gmail.com", "\n",
        "from: ", "mechhummedia@gmail.com", "\n",
        "subject: ", "New Notification!", "\n\n",
        "\nName: " + req.body.name +
        "\nSender Email: " + req.body.email +
        "\nMessage:\n\n" + req.body.message
      ].join('');

      let base64EncodedEmail = Base64.encodeURI(str);
      return base64EncodedEmail
    }

    // const response = 
    await gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: makeBody()
      }
    })
    // console.log(response)

  } catch (error) {
    console.log(error)
  }
  res.sendStatus(200)
})



// Twitter Timeline Endpoint
router.get('/fetchTimeline', async (req, res) => {

  // Twitter oauth config
  const twitterCredentials = {
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
  const twitterOauth2 = require('simple-oauth2').create(twitterCredentials);
  const twitterTokenConfig = {
    scope: 'read',
  };

  let myData = []

  try {
    const result = await twitterOauth2.clientCredentials.getToken(twitterTokenConfig);
    const accessTokenObject = twitterOauth2.accessToken.create(result);
    const accessToken = accessTokenObject.token['access_token']
    const config = {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip'
      },
    }

    const response = await axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=mechanizedhuman&count=20', config)
    const data = await response.data

    parsedTweets = []

    data.forEach(tweet => {
      let date = new Date(tweet['created_at'])

      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
      ];

      let parsedHour = ''
      let parsedSuffix = 'AM'
      const tweetPicSource = tweet['entities']['media'] != undefined? tweet['entities']['media'][1]['media_url_http'] : ''

      if (date.getHours() == 12 || date.getHours() == 0 ) {
        parsedHour = 12
        parsedSuffix = date.getHours() == 12 ? 'PM':'AM'
      } else if (date.getHours() > 12) {
        parsedHour = date.getHours() - 12
        parsedSuffix = 'PM'
      } else {
        parsedHour = date.getHours()
      }

      const timestamp =
        date.getDate() + ' '
        + monthNames[date.getMonth()] + ' '
        + date.getFullYear()
        + ' @ ' + parsedHour
        + ':' + (date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes())
        + parsedSuffix

      let parsedText = ''
      let href = ''
      let textArray = tweet['text'].split(' ')

      textArray.forEach(phrase => {

        const pattern = RegExp('^http')
        if (pattern.test(phrase)) {
          href = phrase
        } else {
          parsedText += phrase + ' '
        }
      })

      const parsedObject = {
        text: parsedText,
        href,
        timestamp,
        tweetPicSource
      }

      parsedTweets.push(parsedObject)
    })

    myData = parsedTweets

  } catch (error) {
    console.log('Access Token error', error.message);
  }
  res.send(myData);
});


const fetchRSS = async (url) => {
  let feed = await parser.parseURL(url);
  return feed
}

router.get('/fetchFeed', async (req, res) => {
  let physFeed = await fetchRSS('https://phys.org/rss-feed/breaking/technology-news/')
  let mitFeed = await fetchRSS('http://news.mit.edu/rss/topic/science-technology-and-society')

  let feedItems = [...physFeed['items'], ...mitFeed['items']]
  const shuffled = feedItems.sort(() => 0.5 - Math.random());
  const shortenedList = shuffled.slice(0, 20);

  let feed = { items: shortenedList }

  res.send(feed);
});

router.get('/fetchPhys', async (req, res) => {
  let feed = await fetchRSS('https://phys.org/rss-feed/breaking/technology-news/')
  res.send(feed);
});

router.get('/fetchMit', async (req, res) => {
  let feed = await fetchRSS('http://news.mit.edu/rss/topic/science-technology-and-society')
  res.send(feed);
});


app.use('/.netlify/functions/server', router);

app.listen(port, () => console.log(`Listening on port ${port}`));