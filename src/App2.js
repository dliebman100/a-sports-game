import "./App.css";
import Game2 from "./components/game/Game2";
import ScoreBoard2 from "./components/scoreboard/ScoreBoard2";

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

function App2() {
  return (
    <div>
      <ScoreBoard2 />
      <Game2 visitingTeam={squirrels} homeTeam={raccoons} />
      <Game2 visitingTeam={bunnies} homeTeam={hounds} />
    </div>
  );
}

export default App2;
