import {createContext, useMemo} from "react";
import {useWeather} from "@/hooks/useWeather.js";

export const WeatherContext = createContext({})

const WeatherContextProvider = (props) => {
    const {
        children
    } = props

    const {
        cityQuery,
        setCityQuery,
        weatherData,
        isError,
        locationString,
        cityImageSrc,
        unit,
        setUnit,
    } = useWeather()

    const value = useMemo(() => {
        return {
            cityQuery,
            setCityQuery,
            weatherData,
            isError,
            locationString,
            cityImageSrc,
            unit,
            setUnit,
        }
    }, [
        cityQuery,
        setCityQuery,
        weatherData,
        isError,
        locationString,
        cityImageSrc,
        unit,
        setUnit,
    ])

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider