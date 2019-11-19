import React, {Component} from 'react';
import TracksComponent from './TracksComponent';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class HomePageContainer extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
    spotifyApi.setAccessToken(token);
    this.getTopTracks()
  }
  this.state = {
    loggedIn: token ? true : false,
    topTracks: []
  }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getTopTracks(){
    spotifyApi.getMyTopTracks({limit: 5, time_range: 'long_term'})
      .then((response) => {
        this.setState({
          topTracks: response.items
        });
      })
  }

  render() {
    return(
        <>
        <a href='http://localhost:8888'> Login to Spotify </a>
        <TracksComponent topTracks={this.state.topTracks}/>
       </>
    )
  }
}


export default HomePageContainer
