import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (location) => console.log(location),
        (err) => console.log(err)
    );
    return (
        <div>What the fuck</div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));