var React = require('react');

var WeatherMessage = (props) => {
    return (
        <p>It's {props.temp} at {props.location}</p>
    )
}

module.exports = WeatherMessage;