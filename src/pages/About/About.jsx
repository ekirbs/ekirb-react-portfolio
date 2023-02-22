import React from 'react';

import thinkingRobot from "./images/thinkingRobot.jpg"
import "./style.css";

export default function About() {
  return (
    <div className="aboutCard">
      <div className="aboutMain">
        <p className="aboutCardContent col-6">Hello! My name is Eric Kirberger and I am an aspiring Full Stack Web Developer in the Rutgers Coding Bootcamp.  Please enjoy my portfolio!</p>
        <img src={thinkingRobot} alt="A robot sitting and thinking."></img>
      </div>
    </div>
  );
}