
import axios from 'axios'
import React, { Component } from 'react';
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
                <a href={item['link']} rel="noopener noreferrer" target="_blank"><p>{item['title']}</p></a>
                <i>{item['content']}</i>
                
              </li>
              
                       
          )}
          
        </ul>
    </div>
    )
  }

}

export default NewsFeed

