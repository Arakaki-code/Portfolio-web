import React, { useState } from "react";
import "./styles.scss";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const CarouselSlide = ({ children, onClick, isDark }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
    onClick(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      <div className="indicators">
        <div className="indicators-arrow">
          <button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <svg
              className="indicators-arrow-path"
              width="40"
              height="40"
              viewBox="0 0 34 34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7578 9.40632L15.5407 17.6235L23.7578 25.8406L22.1144 29.1274L10.6104 17.6235L22.1144 6.11947L23.7578 9.40632Z"
                fill="#8B95A5"
                fillOpacity="0.7"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <svg
              className="indicators-arrow-path"
              width="40"
              height="40"
              viewBox="0 0 33 33"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.90039 8.58L18.1504 16.83L9.90039 25.08L11.5504 28.38L23.1004 16.83L11.5504 5.28L9.90039 8.58Z"
                fill="#8B95A5"
                fillOpacity="0.7"
              />
            </svg>
          </button>
        </div>
        <div className={["indicators-ball",  isDark ? "dark" : ""].join(" ")}>
          {React.Children.map(children, (child, index) => {
            return (
              <button
                className={`${
                  index === activeIndex ? "active" : ""
                } indicators-ball_item`}
                onClick={() => {
                  updateIndex(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
