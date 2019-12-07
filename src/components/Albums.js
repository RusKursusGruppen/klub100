import React, { Component } from "react";
import styled from "styled-components";
import Album from "./Album.js";
import trips from "../trips.json";

const AlbumContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`;

export default class Albums extends Component {
  render() {
    return (
      <AlbumContainer>
        {trips.map(trip => (
          <Album trip={trip} />
        ))}
      </AlbumContainer>
    );
  }
}
