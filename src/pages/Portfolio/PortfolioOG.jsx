import React from 'react';

import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast } from './images';

import "./style.css";

export default function Portfolio() {
  return (
    <div className="portfolioCard">
      <h1 className="portfolioCardHeading">My Portfolio</h1>

      <section id="sample-work" className="projects-section">
        <article className="projectCard card-alt projectZoom">
          <a href="https://ekirbs.github.io/national-park-travelers-guide/" target="_blank" rel="noreferrer"><img src={natParkTravelGuide} className="project-image" alt="My group's National Park Traveler's Guide website."/></a>
          <div className="img-text">
            <h3>Project One</h3>
            <p>National Park Travel Guide!</p>
          </div>
        </article>

        <article className="projectCard card-alt projectZoom">
          <a href="https://ekirbs.github.io/weather-forecast-finder/" target="_blank" rel="noreferrer"><img src={weatherForecast} className="project-image" alt="My Weather Forecast Finder."/></a>
          <div className="img-text">
            <h3>Project Two</h3>
            <p>Weather Forecast Finder!</p>
          </div>
        </article>

        <article className="projectCard card-alt projectZoom">
          <a href="https://ekirbs.github.io/daily-schedule-planner/" target="_blank" rel="noreferrer"><img src={dailySchedulePlanner} className="project-image" alt="My Daily Schedule Planner."/></a>
          <div className="img-text">
            <h3>Project Three</h3>
            <p>Daily Schedule Planner!</p>
          </div>
        </article>

        <article className="projectCard card-alt projectZoom">
          <a href="https://ekirbs.github.io/the-big-quiz/" target="_blank" rel="noreferrer"><img src={theBigQuiz} className="project-image" alt="My quiz game, the BIG quiz!."/></a>
          <div className="img-text">
            <h3>Project Four</h3>
            <p>the BIG quiz!</p>
          </div>
        </article>

        <article className="projectCard card-alt projectZoom">
          <a href="https://ekirbs.github.io/random-password-generator/" target="_blank" rel="noreferrer"><img src={randomPasswordGenerator} className="project-image" alt="My Random Password Generator."/></a>
          <div className="img-text">
            <h3>Project Five</h3>
            <p>Random Password Generator!</p>
          </div>
        </article>

        <article className="projectCard card-alt projectZoom">
          <a href="https://ekirbs.github.io/the-big-quiz/" target="_blank" rel="noreferrer"><img src={theBigQuiz} className="project-image" alt="My quiz game, the BIG quiz!."/></a>
          <div className="img-text">
            <h3>Project Four</h3>
            <p>the BIG quiz!</p>
          </div>
        </article>

      </section>
    </div>
  );
}
