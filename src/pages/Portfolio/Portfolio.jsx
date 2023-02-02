import React from 'react';

import Carousel3d from "../../components/Card/carousel3d";
import CarouselCard from "../../components/Card/carouselCard";

import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast } from './images';

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
                  // <a href="https://ekirbs.github.io/daily-schedule-planner/" target="_blank" rel="noreferrer"><CarouselCard title="Daily Schedule Planner" image={dailySchedulePlanner} /></a>
                  <CarouselCard title="Daily Schedule Planner" image={dailySchedulePlanner} />
                ),
              },
              {
                key: 2,
                content: (
                  // <a href="https://ekirbs.github.io/the-big-quiz/" target="_blank" rel="noreferrer"><CarouselCard title="the BIG quiz" image={theBigQuiz} /></a>
                  <CarouselCard title="the BIG quiz" image={theBigQuiz} />
                ),
              },
              {
                key: 3,
                content: (
                  // <a href="https://ekirbs.github.io/national-park-travelers-guide/" target="_blank" rel="noreferrer"><CarouselCard title="Nat Park Travel Guide" image={natParkTravelGuide} /></a>
                  <CarouselCard title="Nat Park Travel Guide" image={natParkTravelGuide} />
                ),
              },
              {
                key: 4,
                content: (
                  // <a href="https://ekirbs.github.io/random-password-generator/" target="_blank" rel="noreferrer"><CarouselCard title="Random Password Generator" image={randomPasswordGenerator} /></a>
                  <CarouselCard title="Random Password Generator" image={randomPasswordGenerator} />
                ),
              },
              {
                key: 5,
                content: (
                  // <a href="https://ekirbs.github.io/weather-forecast-finder/" target="_blank" rel="noreferrer"><CarouselCard title="Weather Forecast" image={weatherForecast} /></a>
                  <CarouselCard title="Weather Forecast" image={weatherForecast} />
                ),
              },
              {
                key: 6,
                content: (
                  // <a href="https://ekirbs.github.io/the-big-quiz/" target="_blank" rel="noreferrer"><CarouselCard title="the BIG quiz" image={theBigQuiz} /></a>
                  <CarouselCard title="The BIG Quiz" image={theBigQuiz} />
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
