import React from "react";
import Game from "./components/game/Game";
import "./App.css";

export default function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc:
      "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/raccoon.png",
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc:
      "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/squirrel.png",
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc:
      "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/bunny.png",
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc:
      "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/hound.png",
  };

  return (
    <section className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan venue" homeTeam={bunnies} visitingTeam={hounds} />
    </section>
  );
}
