import React, { Component } from "react";
import Header from "./components/Header.js";
import Description from "./components/Description.js";
import Albums from "./components/Albums.js";
import Player from "./components/Player.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.setSong = this.setSong.bind(this);
    this.state = { song: undefined };
  }
  setSong(song) {
    this.setState({ song: song });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        {this.state.song === undefined ? "" : <Player link={this.state.song} />}
        <Albums setSong={this.setSong} />
      </div>
    );
  }
}
