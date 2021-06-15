import React from "react";
import "../../index.css";
import Team from "../team/Team";
import ScoreBoard from "../scoreboard/ScoreBoard";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resetCount: 0,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    };

    this.shotSound = new Audio(
      "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/audio/smb_fireball.wav"
    );
    this.scoreSound = new Audio(
      "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/audio/smb_1-up.wav"
    );
  }

  shoot = (team) => {
    const teamStatsKey = `${team}TeamStats`;
    let score = this.state[teamStatsKey].score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;

      setTimeout(() => {
        this.scoreSound.play();
      }, 100);
    }

    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score,
      },
    }));
  };

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    }));
  };

  render() {
    const { visitingTeamStats, homeTeamStats, resetCount } = this.state;
    const { venue, visitingTeam, homeTeam } = this.props;
    return (
      <div className="Game">
        <ScoreBoard
          visitingTeamStats={visitingTeamStats}
          homeTeamStats={homeTeamStats}
        />

        <h1>Welcome to {venue}</h1>
        <div className="stats">
          <Team
            name={visitingTeam.name}
            logo={visitingTeam.logoSrc}
            stats={visitingTeamStats}
            shotHandler={() => this.shoot("visiting")}
          />

          <div className="versus">
            <h1>VS</h1>
            <div>
              <strong>Resets:</strong> {resetCount}
              <button onClick={this.resetGame}>Reset Game</button>
            </div>
          </div>

          <Team
            name={homeTeam.name}
            logo={homeTeam.logoSrc}
            stats={homeTeamStats}
            shotHandler={() => this.shoot("home")}
          />
        </div>
      </div>
    );
  }
}
