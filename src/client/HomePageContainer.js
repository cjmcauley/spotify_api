import React, { Component } from "react";
import TracksComponent from "./TracksComponent";
import SpotifyWebApi from "spotify-web-api-js";
import DropdownComponent from "./DropdownComponent";

const spotifyApi = new SpotifyWebApi();

class HomePageContainer extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
      this.getTopTracks();
    }
    this.state = {
      loggedIn: token ? true : false,
      topTracks: [],
      noOfTracks: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      timeScale: ["last 4 weeks", "last 6 months", "all time"],
      setTracks: 5,
      setTimeScale: "long_term"
    };
    this.changeTopTracks = this.changeTopTracks.bind(this);
  }
  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  changeTopTracks() {
    spotifyApi
      .getMyTopTracks({
        limit: this.state.setTracks,
        time_range: "short_term"
      })
      .then(response => {
        this.setState({
          topTracks: response.items
        });
      });
  }
  getTopTracks() {
    spotifyApi
      .getMyTopTracks({ limit: 5, time_range: "long_term" })
      .then(response => {
        this.setState({
          topTracks: response.items
        });
      });
  }

  handleChangeTracks = value => {
    this.setState({ setTracks: value });
  };

  handleChangePeriod = value => {
    this.setState({ setTimeScale: value });
  };

  render() {
    return (
      <>
        <a href="http://localhost:8888"> Login to Spotify </a>
        <DropdownComponent
          noOfTracks={this.state.noOfTracks}
          timeScale={this.state.timeScale}
          changeTopTracks={this.changeTopTracks}
          handleChangeTracks={this.handleChangeTracks}
          handleChangePeriod={this.handleChangePeriod}
        />
        <TracksComponent topTracks={this.state.topTracks} />
      </>
    );
  }
}

export default HomePageContainer;
