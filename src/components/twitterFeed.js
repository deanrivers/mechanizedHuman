
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

  renderTweet = (tweet, index) => {
    if(tweet['href'] && tweet['text']){
      return [
      <p key={`p-${index}`} >{tweet['text'] +'\n'}<a href={tweet['href']} rel="noopener noreferrer" target="_blank" >{tweet['href']}</a>  </p>,
      <br  key={`br1-${index}`} />,
      <br key={`br2-${index}`} />,
      //<img src={tweet['tweetPicSource'] + '?format=jpg&name=thumb'} />,
      <i key={`i-${index}`}>{tweet['timestamp']}</i>,
      ]
    }else if(tweet['href'] && !tweet['text']){
      return[
        <a key={`a-${index}`}  href={tweet['href']} rel="noopener noreferrer" target="_blank" >{tweet['href']}</a>,
        <br  key={`br1-${index}`} />,
        <br key={`br2-${index}`} />,
        //<img src={tweet['tweetPicSource'] + '?format=jpg&name=thumb'} />,
        <i key={`i-${index}`}>{tweet['timestamp']}</i>,
      ]
    }else{
      return[
        <p  key={`p-${index}`} >{tweet['text']}</p>,
        <br  key={`br1-${index}`} />,
        <br key={`br2-${index}`} />,
        // <img src={tweet['tweetPicSource'] + '?format=jpg&name=thumb'} />,
        <i  key={`i-${index}`} >{tweet['timestamp']}</i>,
      ]
    }
  }

  render() {
    return (
        <div id="twitter-feed-container">
          {/* <img src={twitterImage} id="twitter-image"/> */}
          {this.props.image}
          <ul style={listStyle}>
            { this.state.feed.map( (tweet, index)  => 
                <li className="twitterFeed-item" key={`twitterFeedLink-${index}`}>
                  {this.renderTweet(tweet)}
                </li>
            )}
          </ul>
      </div>
    )
  }

}

export default TwitterFeed
