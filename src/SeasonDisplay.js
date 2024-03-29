import React from "react";
import "./SeasonDisplay.css";

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  console.log(props.lat);

  console.log(season);

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`} />
    </div>
  );
};

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr It is chilly",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export default SeasonDisplay;
