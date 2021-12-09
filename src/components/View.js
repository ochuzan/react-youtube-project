import { Component } from "react";
import Navbar from "./Navbar";
import YouTube from "react-youtube";
import './View.css';

class View extends Component {
    constructor(){
        super()
        this.state = {
           
        }
    }

    render(){



        const opts = {
            height: '405',
            width: '720',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };

        return (
            <div>
                <Navbar />
                <div id="video-container">
                   
                    <YouTube videoId={"2g811Eo7K8U"} opts={opts} />
                </div>
            </div>
        )
    }
}

export default View;