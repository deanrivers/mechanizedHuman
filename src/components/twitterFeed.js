
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

  renderTweet = tweet => {
    if(tweet['href'] && tweet['text']){
      return [
      <p>{tweet['text'] +'\n'}<a href={tweet['href']} rel="noopener noreferrer" target="_blank" >{tweet['href']}</a>  </p>,
      <br/>,
      <br/>,
      <i>{tweet['timestamp']}</i>   
      ]
    }else if(tweet['href'] && !tweet['text']){
      return[
        <a href={tweet['href']} rel="noopener noreferrer" target="_blank" >{tweet['href']}</a>,
        <br/>,
        <br/>,
        <i>{tweet['timestamp']}</i>  
      ]
    }else{
      return[
        <p>{tweet['text']}</p>,
        <br/>,
        <br/>,
        <i>{tweet['timestamp']}</i>
      ]
    }
  }

  render() {
    return (
      <div id="twitter-feed-container">
        <ul style={listStyle}>
          { this.state.feed.map( tweet  => 
              <li id="twitterFeed">
                {this.renderTweet(tweet)}
              </li>
          )}
        </ul>
    </div>
    )
  }

}

export default TwitterFeed
