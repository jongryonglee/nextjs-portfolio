// components/Stars.js
import React from "react";

const Stars = ({ count = 10 }) => {
  const stars = Array.from({ length: count });

  return (
    <div className="fixed top-0 left-0 w-full h-full　z-0 pointer-events-none">
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
    </div>
  );
};

export default Stars;
