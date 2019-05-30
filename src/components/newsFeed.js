
import axios from 'axios'
import React, { Component } from 'react';
import PropTypes from 'prop-types'


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

  listGenerator = (myData) => {

    let listStyle = {
      overflow: "scroll",
      height: "100px",
      flex: .5
    }

    console.log(myData)
    if (Array.isArray(myData['items'])){
      return (
        <div >
          <ul style={listStyle}>
            { myData['items'].map( item  => 
                <li>
                  <a href={item['link']}><p>{item['title']}</p></a>

                  <i>{item['content']}</i>
                </li>   
            )}
          </ul>
        </div>
      )
      
    }else {
      return myData
    }
  }

  newFeedFetch = () => {

    axios.get("/api/hello")
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
        <ul >
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

