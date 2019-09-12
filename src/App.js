import React, { Component } from 'react';
import axios from 'axios'
import Content from './containers/content';
import VideoPlayer from './components/videoPlayer'
import Loader from './components/preloader';
import Summary from './components/summary'

import './App.css';

import Nav from './containers/nav';
import Countdown from './components/countdown';
import NewsFeed from './components/newsFeed';
import TwitterFeed from './components/twitterFeed';
import Contact from './components/contact';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      newsFeed : [],
      twitterFeed : [],
      loading: true
    }

  }

  componentDidMount = () => {
    this.newsFeedFetch()
    this.twitterFeedFetch()
  }

  newsFeedFetch = () => {

    this.setState({loading:true})

    axios.get("/.netlify/functions/server/fetchFeed")
    .then(response => {
      this.setState({newsFeed : response.data})
    })
    .catch(e => {
      return "ERROR"
    })
  }

  twitterFeedFetch = () => {

    axios.get("/.netlify/functions/server/fetchTimeline")
    .then(response => {
      this.setState({twitterFeed : response.data})
      setTimeout( () => {
        this.setState({ loading: false })
      }, 2000)

    })
    .catch(e => {
      return "ERROR"
    })
  }

  render() {

    let loading = this.state.loading

      // get data for National Robot Day (4/4)
    const currentDate = new Date();
    let year = (currentDate.getMonth() > 3 && currentDate.getDate() > 4) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        

    if (loading){
      return <Loader/>
    } else {
        return (
          <div className="App">
            <div id="main">
              <Nav/>
              <div id="grid">
    
                <div className="main-containers" id="headline">
                  <Content content="tese" text="Headline" padding="0px" float="left" color="#97FAE9"/>
                </div>
    
                <div className="main-containers" id="countdown">
                  <Content text="Countdown" 
                  content={<Countdown date={`${year}-04-04T00:00:00`} />}            
                  padding="0px" float="right" color="#97FAE9"/>
                </div>
    
                <div className="main-containers" id="summary"><Content text="Summary" content={<Summary/>} padding="0px" float="right" color="#FFFFFF"/></div>
                <div className="main-containers" id="news-feed"><Content content={<NewsFeed feed={this.state.newsFeed}/>}id="countdown-contatiner" text="News Feed" padding="0px" float="left" color="#FF7441"/></div>
                <div className="iframe-container" id="videos"><VideoPlayer/></div>
                <div className="main-containers" id="twitter"><Content text="Twitter" content={<TwitterFeed twitterFeed={this.state.twitterFeed} />} padding="0px" float="right" color="#65A2D9"/></div>
                <div className="main-containers" id="contact"><Content content={<Contact/>} text="Contact" padding="0px" float="left" color="#ACE4AA"/></div>
                {/*<div className="main-containers" id="donate"><Content text="donate" padding="0px" float="left" color="white"/></div>
                <div className="main-containers" id="empty-donate-right"><Content text="empty" padding="0px" float="right" color="purple"/></div>
                <div className="main-containers" id="empty-donate-left"><Content text="empty" padding="0px" float="right" color="white"/></div> 
                <div className="main-containers" id="donate2"><Content text="donate" padding="0px" float="right" color="orange"/></div> */}
    
              </div>
                      
            </div>
            
          </div>
        );
    }
  }
}

export default App; 
