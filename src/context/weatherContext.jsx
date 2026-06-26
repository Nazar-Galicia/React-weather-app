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
        geocodeCities,
        setSelectedCity,
        isDropdownOpen,
        setIsDropdownOpen,
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
            geocodeCities,
            setSelectedCity,
            isDropdownOpen,
            setIsDropdownOpen,
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
        geocodeCities,
        setSelectedCity,
        isDropdownOpen,
        setIsDropdownOpen,
    ])

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider