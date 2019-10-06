
import axios from 'axios';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

//image
import twitterImage from '../assets/twitter.png'

let listStyle = {
  maxHeight: '500px',
  overflow: 'scroll',
  marginTop: '12%'
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
        {/* <img src={twitterImage} id="twitter-image"/> */}
        {this.props.image}
        <ul style={listStyle}>
          { this.state.feed.map( tweet  => 
              <li className="twitterFeed-item">
                {this.renderTweet(tweet)}
              </li>
          )}
        </ul>
    </div>
    )
  }

}

export default TwitterFeed
