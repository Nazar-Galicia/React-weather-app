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
        modalData,
        setModalData,
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
            modalData,
            setModalData,
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
        modalData,
        setModalData,
    ])

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider