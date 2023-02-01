import React from 'react';

// import bostonStreetCuisine from "./images/boston-street-cuisine.png";
import dailySchedulePlanner from "./images/daily-sched-screenshot.png";
import theBigQuiz from "./images/big-quiz-screenshot.png";
import natParkTravelGuide from "./images/nat-park-travel-guide-screenshot.png";
import randomPasswordGenerator from "./images/random-password-generator-screenshot.png";
import weatherForecast from "./images/weather-forecast-screenshot.png";

import "./style.css";

export default function Home() {
  return (
    <div className="cardCard">
      <h1 className="cardHeading">Home Page</h1>

      <section className="section-label projects-header">
        <h2>Projects</h2>
      </section>

      <section id="sample-work" className="projects-section">
        <article className="projectCard card-main zoom">
          <a href="https://ekirbs.github.io/national-park-travelers-guide/" target="_blank" rel="noreferrer"><img src={natParkTravelGuide} className="project-image" alt="My group's National Park Traveler's Guide website."/></a>
          <div className="img-text">
            <h3>Project One</h3>
            <p>National Park Travel Guide!</p>
          </div>
        </article>

        <article className="projectCard card-alt zoom">
          <a href="https://ekirbs.github.io/weather-forecast-finder/" target="_blank" rel="noreferrer"><img src={weatherForecast} className="project-image" alt="My Weather Forecast Finder."/></a>
          <div className="img-text">
            <h3>Project Two</h3>
            <p>Weather Forecast Finder!</p>
          </div>
        </article>

        <article className="projectCard card-alt zoom">
          <a href="https://ekirbs.github.io/daily-schedule-planner/" target="_blank" rel="noreferrer"><img src={dailySchedulePlanner} className="project-image" alt="My Daily Schedule Planner."/></a>
          <div className="img-text">
            <h3>Project Three</h3>
            <p>Daily Schedule Planner!</p>
          </div>
        </article>

        <article className="projectCard card-alt zoom">
          <a href="https://ekirbs.github.io/the-big-quiz/" target="_blank" rel="noreferrer"><img src={theBigQuiz} className="project-image" alt="My quiz game, the BIG quiz!."/></a>
          <div className="img-text">
            <h3>Project Four</h3>
            <p>the BIG quiz!</p>
          </div>
        </article>

        <article className="projectCard card-alt zoom">
          <a href="https://ekirbs.github.io/random-password-generator/" target="_blank" rel="noreferrer"><img src={randomPasswordGenerator} className="project-image" alt="My Random Password Generator."/></a>
          <div className="img-text">
            <h3>Project Five</h3>
            <p>Random Password Generator!</p>
          </div>
        </article>
      </section>
    </div>
    //  <div className="cardCard">
    //   <h1 className="cardHeading">Home Page</h1>
    //   <p className="cardContent">
    //     `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //     accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
    //     illo inventore veritatis et quasi architecto beatae vitae dicta sunt
    //     explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
    //     odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
    //     voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
    //     quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
    //     eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
    //     voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
    //     corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
    //     Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
    //     quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
    //     voluptas nulla pariatur?`
    //   </p>
    // </div>
    
  );
}
