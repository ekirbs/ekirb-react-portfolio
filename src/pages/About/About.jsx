import React from 'react';

import thinkingRobot from "./images/thinkingRobot.jpg"
import "./style.css";

export default function About() {
  return (
    <div className="aboutCard">
      <h1 className="aboutCardHeading">About Me</h1>
      <div className="aboutMain">
        <p className="aboutCardContent col-8">Hello! My name is Eric Kirberger and I am an aspiring Full Stack Web Developer. I am currently in the Rutgers Coding Bootcamp building a growing list of important skills and proficiencies.  I am a former fencing instructor and teacher, and I have a Bachelor's Degree in Philosophy from Rutgers University.  Please enjoy the rest of my portfolio!</p>
        <img src={thinkingRobot} alt="A robot sitting and thinking."></img>
      </div>
    </div>
  );
}
