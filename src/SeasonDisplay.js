import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the bich",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it is cold",
        iconName: 'snowflake'
    }
}


const getSeason = (month, lat) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter' 
    } else {
        return lat > 0 ? 'winter' : 'summer' 
    }
}

const SeasonDisplay = props => {
    const season = getSeason(new Date().getMonth(), props.lat);
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;