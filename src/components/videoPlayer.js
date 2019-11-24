import React, {Component} from 'react'

class VideoPlayer extends Component {
  render(){
    return(

        <iframe
          title="videoOfDay"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/6feEE716UEk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
    );
  }
}

export default VideoPlayer;