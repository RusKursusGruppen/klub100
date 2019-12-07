import React, { Component } from "react";
import styled from "styled-components";
import Album from "./Album.js";
import trips from "../trips.json";

const AlbumContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
`;

const YearSelect = styled.button`
  height: 2em;
  font-size: 2em;
`;

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.setYear = this.setYear.bind(this);
    this.state = {
      currentYear: undefined,
      allYears: [...new Set(trips.map(trip => trip.year))]
    };
  }

  setYear(year) {
    this.setState({ currentYear: year });
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <YearSelect onClick={() => this.setYear(undefined)}>
            Alle år
          </YearSelect>
          {this.state.allYears.map(year => (
            <YearSelect onClick={() => this.setYear(year)}>{year}</YearSelect>
          ))}{" "}
        </div>
        <AlbumContainer>
          {trips
            .sort((trip1, trip2) => trip1.year < trip2.year)
            .filter(trip =>
              this.state.currentYear === undefined
                ? true
                : trip.year === this.state.currentYear
            )
            .map(trip => (
              <div onClick={() => this.props.setSong(trip.link)}>
                <Album trip={trip} />
              </div>
            ))}
        </AlbumContainer>
      </div>
    );
  }
}
