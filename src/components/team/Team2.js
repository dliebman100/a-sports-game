import React, { Component } from "react";

export default class Team2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: 0,
      score: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.logoSrc} alt={this.props.name} />
        <p>Shots: {this.state.shots}</p>
        <p>Score: {this.state.score}</p>
        <p>Shooting %: 0%</p>
        <button>Shoot!</button>
      </div>
    );
  }
}