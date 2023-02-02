import React from 'react';

import { Carousel } from 'react-carousel-card-3d';

import Carousel3d from "../../components/Card/Carousel3d";
import CarouselCard from "../../components/Card/CarouselCard";

import { dailySchedulePlanner, theBigQuiz, natParkTravelGuide, randomPasswordGenerator, weatherForecast } from './images';

import "./style.css";

export default function Portfolio() {
  return (
    <div className="portfolioCard">
      <h1 className="portfolioCardHeading">My Portfolio</h1>
      <Carousel3d
          cards={[
            {
              key: 1,
              content: <CarouselCard title="Daily Schedule Planner" image={dailySchedulePlanner} />,
            },
            {
              key: 2,
              content: <CarouselCard title="the BIG quiz" image={theBigQuiz} />,
            },
            {
              key: 3,
              content: (
                <CarouselCard title="Nat Park Travel Guide" image={natParkTravelGuide} />
              ),
            },
            {
              key: 4,
              content: (
                <CarouselCard title="Random Password Generator" image={randomPasswordGenerator} />
              ),
            },
            {
              key: 5,
              content: (
                <CarouselCard title="Weather Forecast" image={weatherForecast} />
              ),
            },
            {
              key: 6,
              content: (
                <CarouselCard title="The BIG Quiz" image={theBigQuiz} />
              ),
            },
          ]}
          offset={2}
        />
      {/* <div className="container carouselContainer"> */}
        {/* <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="https://ekirbs.github.io/national-park-travelers-guide/" target="_blank" rel="noreferrer"><img src={natParkTravelGuide} className="project-image" alt="My group's National Park Traveler's Guide website."/></a>
              <div className="carousel-caption d-none d-md-block">
                <h5>project-1</h5>
                <p>National Park Travel Guide!</p>
              </div>
            </div>
            <div className="carousel-item">
              <a href="https://ekirbs.github.io/weather-forecast-finder/" target="_blank" rel="noreferrer"><img src={weatherForecast} className="project-image d-block w-100" alt="My Weather Forecast Finder."/></a>
              <div className="carousel-caption d-none d-md-block">
                <h5>project-2</h5>
                <p>Weather Forecast Finder!</p>
              </div>
            </div>
            <div className="carousel-item">
              <a href="https://ekirbs.github.io/daily-schedule-planner/" target="_blank" rel="noreferrer"><img src={dailySchedulePlanner} className="project-image d-block w-100" alt="My Daily Schedule Planner."/></a>
              <div className="carousel-caption d-none d-md-block">
                <h5>project-3</h5>
                <p>Daily Schedule Planner!</p>
              </div>
            </div>
            <div className="carousel-item">
              <a href="https://ekirbs.github.io/the-big-quiz/" target="_blank" rel="noreferrer"><img src={theBigQuiz} className="project-image d-block w-100" alt="My quiz game, the BIG quiz!."/></a>
              <div className="carousel-caption d-none d-md-block">
                <h5>project-4</h5>
                <p>the BIG quiz!</p>
              </div>
            </div>
            <div className="carousel-item">
              <a href="https://ekirbs.github.io/the-big-quiz/" target="_blank" rel="noreferrer"><img src={theBigQuiz} className="project-image d-block w-100" alt="My quiz game, the BIG quiz!."/></a>
              <div className="carousel-caption d-none d-md-block">
                <h5>project-4 again</h5>
                <p>the BIG quiz!</p>
              </div>
            </div>
            <div className="carousel-item">
              <a href="https://ekirbs.github.io/random-password-generator/" target="_blank" rel="noreferrer"><img src={randomPasswordGenerator} className="project-image d-block w-100" alt="My Random Password Generator."/></a>
              <div className="carousel-caption d-none d-md-block">
                <h5>project-6</h5>
                <p>Random Password Generator!</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      {/* </div> */}
    </div>
  );
}
