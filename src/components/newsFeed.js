
import axios from 'axios'
import React, { Component } from 'react'
import moment from 'moment/src/moment'
// import PropTypes from 'prop-types'

//images

let listStyle = {
  maxHeight: '350px',
  overflow: 'scroll',
  marginTop: '12%',  
}

class NewsFeed extends Component {

  constructor(props){
    super(props);

    this.state = {
      feed : {
        items: []
      }
    }
  }

  
  componentDidMount = () => {
    this.newFeedFetch()
    
  }

  newFeedFetch = () => {

    axios.get("/.netlify/functions/server/fetchFeed")
    .then(response => {
      console.log(response.data['items'])
      this.setState({feed : response.data})
    })
    .catch(e => {
      return "ERROR"
    })
  }

  render() {
    return (
      <div id="news-feed-container">
        {/* <img src={newsFeed} id="news-feed-image"></img> */}
        <ul style={listStyle} id="news-list">
          { this.state.feed['items'].map( (item, index ) => 
              <li key={`newsFeedLink-${index}`} >
                <img className="news-image" src={item.media['$'].url} width='100%'/>
                <a href={item['link']} rel="noopener noreferrer" target="_blank"><p>{item['title']}</p></a>
                <i>{item['content']}</i>
                <br/>
                <br/>
                <i className="timestamp">{moment(item['pubDate']).utc().format('MMMM Do YYYY')}</i>
                <p>{item['$']}</p>
              </li>   
          )}
          
        </ul>
    </div>
    )
  }

}

export default NewsFeed

