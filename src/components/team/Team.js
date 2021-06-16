import React from "react";
import "../../index.css";

export default function Team(props) {
  //display a Shot Percentage metric.
  let shotPercentageDiv;
  //This should be shots attempted divided by shots scored.
  //This metric should only display if a shot has been taken.This should not be visible if the team has not attempted to make a shot.
  if (props.stats.shots) {
    const shotPercentage = Math.round(
      (props.stats.score / props.stats.shots) * 100
    );
    shotPercentageDiv = (
      <div>
        <strong>Shooting %: {shotPercentage}</strong>
      </div>
    );
  }
//The Team component should have a Shoot button. We don't score every time we shoot so let's discuss the shoot buttons functionality. 
  
  //When a shot is taken the Shots Taken count should always increase
  
  //There should be a random chance that the Score counter increases.

  return (
    <div className="Team">
      <h2>{props.name}</h2>

      <div className="identity">
        <img src={props.logo} alt={props.name} />
      </div>

      <div>
        <strong>Shots:</strong> {props.stats.shots}
      </div>

      <div>
        <strong>Score:</strong> {props.stats.score}
      </div>

      {shotPercentageDiv}

      <button onClick={props.shotHandler}>Shoot!</button>
    </div>
  );
}
