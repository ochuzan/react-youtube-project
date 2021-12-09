import { Component } from "react";
import Navbar from "./Navbar";
import YouTube from "react-youtube";

class View extends Component {
    constructor(){
        super()
        this.state = {
            videoSearchTest: [],
            // selectedVideo: []
        }
    }

    // componentDidMount(){
    //     this.getTestVideo()
    // }

    // getTestVideo = () => {
    //     fetch(`https:///youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=Linustechtips&type=video&key=${process.env.REACT_APP_API_KEY}`)
    //         .then((res) => {
    //             return res.json();
    //         }).then((data) => {
    //             this.setState({
    //                 videoSearchTest: data
    //             })
    //         })
    //         console.log(this.state.videoSearchTest)
    // }

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
                    <YouTube videoId="2g811Eo7K8U" opts={opts} />
                </div>
            </div>
        )
    }
}

export default View;