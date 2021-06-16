import React, { Component } from "react";
import Team2 from "../Team/Team2";

export default class Game2 extends Component {
  render() {
    return (
      <div>
        <Team2
          name={this.props.visitingTeam.name}
          logoSrc={this.props.visitingTeam.logoSrc}
        />
        <div>
          <p>Resets:</p>
          <button>Reset Game</button>
        </div>
        <Team2
          name={this.props.homeTeam.name}
          logoSrc={this.props.homeTeam.logoSrc}
        />
      </div>
    );
  }
}
