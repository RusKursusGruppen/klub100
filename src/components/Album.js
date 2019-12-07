import React, { Component } from "react";
import styled from "styled-components";

const CoverImg = styled.div`
  flex-grow: 1;
  height: 256px;
  width: 256px;
  padding: 5px;
  text-align: center;
  &:hover {
    border: 1px solid red;
  }
`;

export default class Album extends Component {
  render() {
    return (
      <CoverImg>
        <img style={{ height: "70%" }} src={this.props.trip.logo} />
        <h2>
          {this.props.trip.name} : {this.props.trip.year}
        </h2>
      </CoverImg>
    );
  }
}
