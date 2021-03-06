import React, {Component} from 'react'
// import ReactPlayer from 'react-player'
 
// let VideoPlayer = () => {
//   return <ReactPlayer url='https://www.youtube.com/watch?v=6feEE716UEk' width="80%"/>
// }


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