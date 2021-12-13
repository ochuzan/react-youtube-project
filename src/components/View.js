import { Component } from "react";
import Navbar from "./Navbar";
import YouTube from "react-youtube";
import { withRouter } from 'react-router-dom'
import './View.css';


class View extends Component {
    render(){
        const { id } = this.props.match.params;

        const opts = {
            height: '405',
            width: '720',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };

        return (
            <div id="video-page">
                <Navbar />

                <div id="video-container">
                    <YouTube videoId={id} opts={opts} />
                </div>

                {/* <div id='comment-form'>
                    
                </div> */}
            </div>
        )
    }
}

export default withRouter(View);