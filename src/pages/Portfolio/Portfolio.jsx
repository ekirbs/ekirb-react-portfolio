import React from 'react';

import Carousel3d from "../../components/Card/carousel3d";
import CarouselCard from "../../components/Card/carouselCard";
// import projects from "./projects";

import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast, bostonStreetCuisine, taskSandwich } from './images';

import "./style.css";

export default function Portfolio() {
  return (
    <div className="portfolioCard">
      <h1 className="portfolioCardHeading">My Portfolio</h1>
      <div className="portfolioCardContent">
        <div className="carouselContainer">
          <Carousel3d
            cards={[
              {
                key: 1,
                content: (
                  <CarouselCard
                  title={"Task Sandwich"}
                  image={taskSandwich}
                  description={"A MERN task-management system with built in rewards system."}
                  url={"https://task-sandwich.herokuapp.com/"}
                  className="projectImg" />
                ),
              },
              {
                key: 2,
                content: (
                  // <a href="https://boston-street-cuisine-app.herokuapp.com/" target="_blank" rel="noreferrer"><CarouselCard title="Boston Street Cuisine" image={theBigQuiz} /></a>
                  <CarouselCard
                    title={"Boston Street Cuisine"}
                    image={bostonStreetCuisine}
                    description={"An App to find location and information about street vendors in Boston."}
                    url={"https://boston-street-cuisine-app.herokuapp.com/"}
                    className="projectImg" />
                ),
              },
              {
                key: 3,
                content: (
                  // <a href="https://ekirbs.github.io/daily-schedule-planner/" target="_blank" rel="noreferrer"><CarouselCard title="Daily Schedule Planner" image={dailySchedulePlanner} /></a>
                  <CarouselCard
                  title={"Daily Schedule Planner"}
                  image={dailySchedulePlanner}
                  description={"A Daily Schedule Planner to allows the saving, organization, and deletion of daily activities."}
                  url={"https://ekirbs.github.io/daily-schedule-planner/"}
                  className="projectImg" />
                ),
              },
              {
                key: 4,
                content: (
                  // <a href="https://ekirbs.github.io/the-big-quiz/" target="_blank" rel="noreferrer"><CarouselCard title="the BIG quiz" image={theBigQuiz} /></a>
                  <CarouselCard
                  title={"The BIG Quiz"}
                  image={theBigQuiz}
                  description={"The BIG Quiz.  A timed quiz that stores and displays high scores."}
                  url={"https://ekirbs.github.io/the-big-quiz/"}
                  className="projectImg" />
                ),
              },
              {
                key: 5,
                content: (
                  // <a href="https://ekirbs.github.io/national-park-travelers-guide/" target="_blank" rel="noreferrer"><CarouselCard title="Nat Park Travel Guide" image={natParkTravelGuide} /></a>
                  <CarouselCard
                  title={"Nat Park Travel Guide"}
                  image={natParkTravelGuide}
                  description={"A Traveler's Guide to all National Parks in Northeast USA."}
                  url={"https://ekirbs.github.io/national-park-travelers-guide/"}
                  className="projectImg" />
                ),
              },
              {
                key: 6,
                content: (
                  // <a href="https://ekirbs.github.io/random-password-generator/" target="_blank" rel="noreferrer"><CarouselCard title="Random Password Generator" image={randomPasswordGenerator} /></a>
                  <CarouselCard
                  title={"Password Generator"}
                  image={randomPasswordGenerator}
                  description={"A Random Password Generator to provide secure passwords locally."}
                  url={"https://ekirbs.github.io/random-password-generator/"}
                  className="projectImg" />
                ),
              },
              {
                key: 7,
                content: (
                  // <a href="https://ekirbs.github.io/weather-forecast-finder/" target="_blank" rel="noreferrer"><CarouselCard title="Weather Forecast" image={weatherForecast} /></a>
                  <CarouselCard
                  title={"Weather Forecast"}
                  image={weatherForecast}
                  description={"A Weather Forecast search function using the OpenWeatherMapAPI."}
                  url={"https://ekirbs.github.io/weather-forecast-finder/"}
                  className="projectImg" />
                ),
              },
            ]}
            offset={2}
          />
        </div>
      </div>
    </div>
  );
}
