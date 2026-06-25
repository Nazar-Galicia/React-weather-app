import './WeatherForecastCard.css'
import {useEffect, memo} from "react";

const WeatherForecastCard = (props) => {
    const {
        time='',
        day='',
        condition,
        temp,
        minTemp=''
    } = props;

    const dateTime = new Date(time.replace(" ", "T"));
    const stringTime = dateTime.toLocaleTimeString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit',
    });

    const dateDay = new Date(day);
    const stringDay = dateDay.toLocaleDateString("en-US", {weekday: "long"})

    return (
        <div className='weather-main-info__forecast-card'>
            <time className='weather-main-info__forecast-time'>{time ? stringTime : stringDay}</time>
            <img className='weather-main-info__forecast-icon' src={condition.icon} alt="forecast icon"/>
            <p className='weather-main-info__forecast-temp'>{temp}° <span>{minTemp ? `${minTemp}°` : ''}</span></p>
        </div>
    )
}

export default memo(WeatherForecastCard);