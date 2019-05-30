
import axios from 'axios'
import React, { Component } from 'react';
import PropTypes from 'prop-types'

let listStyle = {
  maxHeight: '1000px',
  overflow: 'scroll'
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

    axios.get("/api/fetchFeed")
    .then(response => {
      this.setState({feed : response.data})
    })
    .catch(e => {
      return "ERROR"
    })



  }

  render() {
    return (
      <div >
        <ul style={listStyle}>
          { this.state.feed['items'].map( item  => 
              <li>
                <a href={item['link']}><p>{item['title']}</p></a>
                <i>{item['content']}</i>
              </li>   
          )}
        </ul>
    </div>
    )
  }

}

export default NewsFeed

