import React, { Component } from 'react';
import './App.css';
import Bar from './comps/Bar.js' ;
import VideoList from './comps/VideoList.js' ;
import Video from './comps/Video.js' ;

const KEY = 'AIzaSyB0jt-mNmkHwiIAA9X4EyzbXZ7HZE0JWFA' ;
let url = 'https://www.googleapis.com/youtube/v3/search?key='+ KEY +'&part=snippet&maxResults=11&q=' ;
let page = 1 ;

const initState = {
  videos : [] ,
  selectedVideo : null ,
}

class App extends Component {
  constructor()
  {
    super() ;
    this.state = initState ;
  }

  onBarSubmit = (text) => {
    fetch(url + text)
    .then( res => {
            if ( res.ok )
              return res.json() ;
            else 
              throw Error(res.statusText)
          } )
    .then( resp => {
            console.log("Page" + page) ;
            console.log(resp) ;
            this.setState({videos : resp.items, selectedVideo : resp.items[0] }) ;
          } )
    .catch( err => console.log(err) ) ;
  } 

  onVideoSelect = (video) => {
    console.log(video ) ;
    this.setState({selectedVideo : video}) ;
    window.scrollTo(0, 165) ;
  }

  logic = () => {
    if (this.state.selectedVideo)
    {
      return <Video video={this.state.selectedVideo} /> ;
    }
    else
      return null;
  }

  logic2 = () => {
    if (this.state.selectedVideo)
      return null ;
    else 
      return 'Search and select a video to continue...' ;
  }

  render() {
    return (
      <div className="App ui container">
          <h1> You<span className='red'>Tube</span> Anonymous </h1>
          <Bar formSubmit={this.onBarSubmit}/>
          <h2> Search YouTube Anonymously... Free and unlimited... </h2>
          <div> {this.logic2()} </div>
          <div className="ui grid" >
            <div className="ui row" >
              <div className="eleven wide column" >
                {this.logic()}
              </div>
              <div className="five wide column">  
                <VideoList onSelect={this.onVideoSelect} videos={this.state.videos} />
              </div>            
            </div>
          </div>
      </div>
    );
  }
}

export default App;
