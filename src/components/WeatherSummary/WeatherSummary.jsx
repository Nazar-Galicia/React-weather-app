import './WeatherSummary.css'
import CityInput from "@/components/CityInput/CityInput.jsx";
import {useContext} from "react";
import {WeatherContext} from "@/context/weatherContext.jsx";
import RainIcon from '../../../public/icons/rain.png'
import WindIcon from '../../../public/icons/wind.png'
import HumidityIcon from '../../../public/icons/humidity.png'
import CitySearch from "@/components/CitySearch/CitySearch.jsx";

const WeatherSummary = (props) => {

    const {
        weatherData,
        isError,
        locationString,
        cityImageSrc,
        unit,
    } = useContext(WeatherContext);

    if (isError || Object.keys(weatherData).length === 0) {
        return (
            <div className='weather-summary'>
                <CitySearch />
                <h2 className='weather-summary__city-not-found'>Search for city</h2>
            </div>
        )
    }

    const {
        current,
        location,
    } = weatherData;

    const date = new Date(location.localtime.replace(" ", "T"));
    const stringDate = {
        weekDay: date.toLocaleString("en-US", {weekday: "long"}),
        day: date.toLocaleString("en-US", {day: "numeric"}),
        month: date.toLocaleDateString("en-US", {month: "long"}),
        time: date.toLocaleTimeString("uk-UA", {hour: "2-digit", minute: "2-digit",})
    }

    const {
        condition,
        chance_of_rain,
        wind_kph,
        wind_dir,
        humidity,
    } = current;

    return (
        <div className='weather-summary'>
            <CitySearch />

            <img className='weather-summary__weather-icon' src={condition.icon} alt="weather icon"/>

            <h1 className='weather-summary__temparature'>{unit === 'c' ? current.temp_c : current.temp_f}<span>{unit === 'c' ? '°C' : '°F'}</span></h1>

            <data className='weather-summary__date'><span>{stringDate.weekDay},</span> {stringDate.day} {stringDate.month}, {stringDate.time}</data>

            <p className='weather-summary__weather-info'>
                <img
                    className='weather-summary__weather-info-icon'
                    src={RainIcon}
                    alt="rain chance"
                />
                Probability of precipitation: {chance_of_rain}%
            </p>

            <p className='weather-summary__weather-info'>
                <img
                    className='weather-summary__weather-info-icon'
                    src={WindIcon}
                    alt="wind"
                />
                Wind: {wind_kph}km/h ({wind_dir})
            </p>

            <p className='weather-summary__weather-info'>
                <img
                    className='weather-summary__weather-info-icon'
                    src={HumidityIcon}
                    alt="humidity"
                />
                Humidity: {humidity}%
            </p>

            <figure className='weather-summary__city-card'>
                <img className='weather-summary__city-card-image' src={cityImageSrc} alt="nature"/>
                <figcaption className='weather-summary__city-card-caption'>{locationString.current}</figcaption>
            </figure>
        </div>
    )
}

export default WeatherSummary