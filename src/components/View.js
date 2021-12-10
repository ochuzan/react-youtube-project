import { Component } from "react";
import Navbar from "./Navbar";
import YouTube from "react-youtube";
import './View.css';
import { useLocation } from 'react-router-dom'

// class View extends Component {
function View (){
    // constructor(){
    //     super()
    //     this.state = {
           
    //     }
    // }

    

    // render(){
        const props = useLocation()
        // const video = location.state

        console.log(props)
        const opts = {
            height: '405',
            width: '720',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };
        //   2g811Eo7K8U
        return (
            <div>
                <Navbar />
                <div id="video-container">
                   
                    <YouTube videoId={props.state.data.id.videoId} opts={opts} />
                </div>
            </div>
        )
    // }
}

export default View;