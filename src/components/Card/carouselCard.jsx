import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import whiteSquare from "./images/white-square.png";

function Card({ title, image, currentSlide, currentIndex }: any) {
  const [show, setShown] = useState(false);

  const styles = useSpring({
    transform: show ? "scale(1.05)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
      borderRadius: "2em",
  });
  return (
    <animated.div
      style={{ ...styles, height: "fit-content" }}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className="carouselWhiteSquareOuterDiv">
        <div className="carouselWhiteSquareInnerDiv">
          <img src={whiteSquare} alt="white square" className="carouselWhiteSquare" />
          <p className="carousel-txt"> Placeholder text for the projects! </p>
        </div>

        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 300,
              height: 350,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img src={image} alt="title" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
          
          {title && (
            <div
              style={{
                marginTop: 24,
                fontWeight: 600,
                fontSize: 28,
                lineHeight: "150%",
                color: "#FDFDFD",
              }}
            >
              {title}
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
}

export default Card;