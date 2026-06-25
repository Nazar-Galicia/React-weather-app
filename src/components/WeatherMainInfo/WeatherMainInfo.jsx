import './WeatherMainInfo.css'
import {useContext, useState, memo} from "react";
import WeatherTabsButtonContainer from "@/components/WeatherTabsButtonContainer/WeatherTabsButtonContainer.jsx";
import WeatherForecastContainer from "@/components/WeatherForecastContainer/WeatherForecastContainer.jsx";
import {WeatherContext} from "@/context/weatherContext.jsx";
import WeatherHighlightsContainer from "@/components/WeatherHighlightsContainer/WeatherHighlightsContainer.jsx";
import TemperatureSwitch from "@/components/TemperatureSwitch/TemperatureSwitch.jsx";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch.jsx";

const WeatherMainInfo = () => {
    const [weatherTab, setWeatherTab] = useState('today')

    const {
        isError,
        weatherData
    } = useContext(WeatherContext)

    const {
        forecast
    } = weatherData

    if (isError && Object.keys(weatherData).length !== 0) {
        return (
            <div className='weather-main-info'>
                <div className='weather-main-info__switch-container'>
                    <WeatherTabsButtonContainer
                        weatherTab={weatherTab}
                        setWeatherTab={setWeatherTab}
                    />
                    <ThemeSwitch />
                    <TemperatureSwitch />
                </div>

                <p className="weather-empty__text">
                    Search for a city to view the current weather and forecast.
                </p>
            </div>
        )
    }

    return (
        <div className='weather-main-info'>
            <div className='weather-main-info__switch-container'>
                <WeatherTabsButtonContainer
                    weatherTab={weatherTab}
                    setWeatherTab={setWeatherTab}
                />
                <ThemeSwitch />
                <TemperatureSwitch />
            </div>

            {weatherTab === 'today' && isError === false && Object.keys(weatherData).length !== 0 ? <WeatherForecastContainer forecast={forecast} tab='today' /> : null}
            {weatherTab === 'week' && isError === false && Object.keys(weatherData).length !== 0 ? <WeatherForecastContainer forecast={forecast} tab='week' /> : null}

            {isError === false && Object.keys(weatherData).length !== 0 ? <WeatherHighlightsContainer /> : null}
        </div>
    )
}

export default memo(WeatherMainInfo);