import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        message: "le's hit beach",
        iconName: 'sun'
    },
    winter: {
        text: "Hrrr. it's chilly",
        iconName: "snowflake icon massive"

    }
}
const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? "summer" : "winter";
    } else {
        return latitude < 0 ? "winter" : "summer";
    }
};
const SeasonDisplay = ({ latitude }) => {
    const season = getSeason(latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName}`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName}`}></i>
    </div>
}

export default SeasonDisplay;