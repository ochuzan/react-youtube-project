import './Home.css';
import {Component} from "react"
// import YouTube from "react-youtube"
import React from "react"
import VideoList from "./VideoList"
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import View from './View';


class Home extends Component {
  constructor(){
    super();
    this.state={
      search: [],
      userInput: ''
    }
  }

  getVideoResult=(event)=>{
    event.preventDefault();
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.state.userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
    .then ((res)=>{
      return res.json()
    }).then((data)=>{
      this.setState({
        search: data
      })
      
    })
    console.log(this.state.search)
  }

  handleUserInput=(e)=>{
    this.setState({
      userInput:e.target.value,
    })
   
  }
  

  render(){
     console.log(this.state.userInput)
     let videoThumbnails 
      if(this.state.search.length === 0){
        videoThumbnails= <div class="alert"><p>No search results yet! Please Submit a search above!</p></div>
      } else{
        <View/>
         videoThumbnails = this.state.search.items.map((video)=>{
        return(
          <Link to ='/view/'> <VideoList video = {video} /> </Link>
        )
      })
      }
     

    return (
    <div className="display">  

      <Navbar />

      <div id="search-container">
        <form id='search'onSubmit={this.getVideoResult} >
          <input type='text' placeholder='Search...' id ='text' value={this.state.userInput} onInput={this.handleUserInput}/> 
          <button  type='submit'>Search</button>
        </form>
      
      </div>
      <br/>
      <div id="video-container">  
       {videoThumbnails}
      </div>

    </div>
    );
  }
  
}

export default Home;
