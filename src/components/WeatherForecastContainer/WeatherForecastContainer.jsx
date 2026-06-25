import WeatherForecastCard from "@/components/WeatherForecastCard/WeatherForecastCard.jsx";
import {useEffect, useRef, memo, useContext} from "react";
import './WeatherForecastContainer.css'
import {WeatherContext} from "@/context/weatherContext.jsx";

const WeatherForecastContainer = (props) => {
    const {
        unit
    } = useContext(WeatherContext);

    const {
        forecast,
        tab='today',
    } = props

    const {
        forecastday
    } = forecast

    let forecastList

    const forecastRef = useRef(null)

    useEffect(() => {
        forecastRef.current.classList.add("weather-main-info__forecast-container--anim")

        setTimeout(() => {
            if (forecastRef.current) {
                forecastRef.current.classList.remove("weather-main-info__forecast-container--anim")
            }
        }, 1000)
    }, [tab, forecast]);

    switch (tab) {
        case 'today': {
            forecastList = forecastday[0]

            return (
                <div ref={forecastRef} className='weather-main-info__forecast-container'>
                    {
                        forecastList.hour.map((data) => (
                            <WeatherForecastCard
                                key={data.time}
                                time={data.time}
                                temp={unit === 'c' ? data.temp_c : data.temp_f}
                                condition={data.condition}
                            />
                        ))
                    }
                </div>
            )
        }
        case 'week': {
            forecastList = forecastday

            return (
                <div ref={forecastRef} className='weather-main-info__forecast-container'>
                    {
                        forecastList.map(({date, day}) => (
                            <WeatherForecastCard
                                key={date}
                                day={date}
                                temp={unit === 'c' ? day.maxtemp_c : day.maxtemp_f}
                                condition={day.condition}
                                minTemp={unit === 'c' ? day.mintemp_c : day.mintemp_f}
                            />
                        ))
                    }
                </div>
            )
        }
    }
}

export default memo(WeatherForecastContainer)