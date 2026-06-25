import {memo, useContext} from "react";
import WeatherHighlightCardBase from "@/components/WeatherHighlightCardBase/WeatherHighlightCardBase.jsx";
import './WeatherHighlightsList.css'
import {WeatherContext} from "@/context/weatherContext.jsx";
import WindCard from "@/components/WindCard/WindCard.jsx";
import HumidityCard from "@/components/HumidityCard/HumidityCard.jsx";
import SunriseCard from "@/components/SunriseCard/SunriseCard.jsx";
import PressureCard from "@/components/PressureCard/PressureCard.jsx";
import DewpointCard from "@/components/DewpointCard/DewpointCard.jsx";
import FeelslikeCard from "@/components/FeelslikeCard/FeelslikeCard.jsx";

const WeatherHighlightsList = () => {
    const {
        weatherData,
        unit,
    } = useContext(WeatherContext);

    const {
        current,
        forecast,
    } = weatherData;

    const {
        wind_kph,
        wind_degree,
        wind_dir,
        humidity,
        pressure_mb,
    } = current;

    return (
        <div className="weather-main-info__highlights-list">
            <WindCard
                wind_kph={wind_kph}
                wind_degree={wind_degree}
                wind_dir={wind_dir}
            />
            <HumidityCard
                humidity={humidity}
            />

            <SunriseCard
                sunrise={forecast.forecastday[0].astro.sunrise}
                sunset={forecast.forecastday[0].astro.sunset}
            />

            <PressureCard
                pressure_mb={pressure_mb}
            />

            <DewpointCard
                dewpoint={unit === 'c' ? current.temp_c : current.temp_f}
            />

            <FeelslikeCard
                feelslike={unit === 'c' ? current.feelslike_c : current.feelslike_f}
                temp={unit === 'c' ? current.temp_c : current.temp_f}
            />
        </div>
    )
}

export default memo(WeatherHighlightsList)