import React from 'react';

import thinkingRobot from "./images/thinkingRobot.jpg"
import "./style.css";

export default function About() {
  return (
    <div className="aboutCard">
      <h1 className="cardHeading">About Me</h1>
      <div className="aboutMain">
        <p className="cardContent col-9">Hello! My name is Eric Kirberger and I am an aspiring Full Stack Web Developer. I am currently in the Rutgers Coding Bootcamp, with a constantly improving knowledge of important programming technologies, including: </p>
        <img src={thinkingRobot} alt="A robot sitting and thinking."></img>
      </div>
      <ul>
        <li>MongoDB/Mongoose</li>
        <li>Express.js</li>
        <li>React</li>
        <li>Node.js</li>
        <li>MySQL/Sequelize</li>
        <li>And Many More</li>
      </ul>
      <p className="cardContent">Before working in web development, I was a fencing instructor and teacher of over 15 years, having achieved a Bachelor's Degree in Philosophy from Rutgers University. Please enjoy the rest of my portfolio.</p>
    </div>
  );
}
