import React, { Component } from "react";
import styled from "styled-components";

export default class Player extends Component {
  render() {
    return (
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${this.props.link}&color=%23ff5500&visual=true`}
      ></iframe>
    );
  }
}
