import React from "react";
import { useState } from "react";
import Star from "./Star";

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = "48",
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
    
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };

  const starContainerStyle = {
    display: "flex",
  };

  const handleRating = (rating) => {
    setRating(rating);
    onSetRating(rating);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onClick={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

export default StarRating;
