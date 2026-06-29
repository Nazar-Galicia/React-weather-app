import {memo, useContext} from "react";
import {WeatherContext} from "@/context/weatherContext.jsx";
import './CityInput.css'
import searchIcon from '../../../public/icons/search.png'

const CityInput = (props) => {
    const {
        cityQuery,
        setCityQuery,
        setIsDropdownOpen,
    } = useContext(WeatherContext)

    return (
        <fieldset className='weather-summary__field'>
            <img className='weather-summary__field-icon' src={searchIcon} alt="search icon"/>
            <input
                className='weather-summary__field-input'
                type="text"
                placeholder='Search city...'
                value={cityQuery}
                onChange={(event) => {
                    setCityQuery(event.target.value)
                }}
                onBlur={() => {
                    setTimeout(() => {
                        setIsDropdownOpen(false)
                    }, 100)
                }}
                onFocus={() => {
                    setIsDropdownOpen(true)
                }}
            />
        </fieldset>
    )
}

export default memo(CityInput);