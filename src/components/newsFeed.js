
import axios from 'axios'

const fetchFeed = () => {
  axios.get("https://phys.org/rss-feed/breaking/technology-news/")
    .then( response => {
      console.log(response)
      console.log(response.data)
    })
}

// let NewsFeed = () => {
//   fetchFeed()
//   return response.data
// }

