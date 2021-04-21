import React from 'react';


const getSeason = (month, lat) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter' 
    } else {
        return lat > 0 ? 'Winter' : 'Summer' 
    }
}

const SeasonDisplay = props => {
    console.log(props.lat);
    return <div>Season Display</div>
}

export default SeasonDisplay;