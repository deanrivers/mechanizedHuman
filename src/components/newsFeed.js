
import axios from 'axios'

let NewsFeed =  () => {


  axios.get("/api/hello")
    .then(response => {
      console.log(response.data)
      return JSON.stringify(response.data)
    })
    .catch(e => {
      return "ERROR"
    })

}

export default NewsFeed

