import { render } from "@testing-library/react";
import { Component } from "react";

class VideoList extends Component{
    constructor(){
        super();
    }


render(){
    let {thumbnails, title}= this.props.video.snippet
    return(
        <div id='video-container'>
            <div><img src={thumbnails.default.url} alt='youtube thumbnail'/></div>
            <br/>
            <div>{title}</div>
        </div>
    )}
}

export default VideoList