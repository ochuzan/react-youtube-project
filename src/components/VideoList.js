import { Component } from "react";
import './VideoList.css'

class VideoList extends Component{
    render(){
        let {thumbnails, title} = this.props.video.snippet;


render(){
    let {thumbnails, title}= this.props.video.snippet
    return(
         <div id='thumbnail-container'>
            <div class ='video-container'>
                <div class='media'>
                    <img src={thumbnails.default.url} alt='youtube thumbnail'/>
                </div>     
                    <div class ='content'>
                       <span> {title} </span> 
                        <br/>
                    </div>
             </div>
             


       </div> 
            
        
    )}
}

export default VideoList