// components/Stars.js
import React from "react";

const Stars = ({ count = 10 }) => {
  const stars = Array.from({ length: count });

  return (
    <>
      {stars.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}vh`,
          animationDuration: `${2 + Math.random() * 3}s`,
          animationDelay: `${Math.random() * 5}s`,
          width: `${2 + Math.random() * 3}px`,
          height: `${2 + Math.random() * 3}px`,
        };
        return <div key={i} className="star" style={style}></div>;
      })}
    </>
  );
};

export default Stars;
