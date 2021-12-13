import { Component } from "react";
import "./VideoList.css"

class VideoList extends Component{
    render(){
        let {thumbnails, title} = this.props.video.snippet;

        return(
            <div>
                <div><img src={thumbnails.default.url} alt='youtube thumbnail'/></div>
                {/* <br/> */}
                <div>{title}</div>
            </div>
        )
    }
}

export default VideoList