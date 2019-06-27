
import axios from 'axios';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

let listStyle = {
  maxHeight: '300px',
  overflow: 'scroll'
}


class TwitterFeed extends Component {

  constructor(props){
    super(props);

    this.state = {
      feed : []
    }
  }

  
  componentDidMount = () => {
    this.twitterFeedFetch()
    
  }

  twitterFeedFetch = () => {

    axios.get("/.netlify/functions/server/fetchTimeline")
    .then(response => {
      this.setState({feed : response.data})
    })
    .catch(e => {
      return "ERROR"
    })



  }

  render() {
    return (
      <div id="twitter-feed-container">
        <ul style={listStyle}>
          
          { this.state.feed.map( tweet  => 
              <li>
                <p>{tweet['text']}</p>
                <i>{tweet['created_at']}</i>     
              </li>
          )}
        </ul>
    </div>
    )
  }

}

export default TwitterFeed

