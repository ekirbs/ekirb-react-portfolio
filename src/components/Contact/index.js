import React from 'react';
import thinkingRobot from "../thinkingRobot.jpg";

import './style.css';

function Header() {
  return (
    <header className="header">
      <img src={thinkingRobot} alt="A robot sitting and thinking."></img>
      <a href="/"><h1>Eric Kirberger || Full Stack Web Developer</h1></a>
    </header>
  );
}

export default Header;