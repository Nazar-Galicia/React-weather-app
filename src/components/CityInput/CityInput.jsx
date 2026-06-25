import {useContext} from "react";
import {WeatherContext} from "@/context/weatherContext.jsx";
import './CityInput.css'

const CityInput = (props) => {
    const {
        cityQuery,
        setCityQuery,
    } = useContext(WeatherContext)

    return (
        <fieldset className='weather-summary__field'>
            <img className='weather-summary__field-icon' src="../../../public/icons/search.png" alt="search icon"/>
            <input
                className='weather-summary__field-input'
                type="text"
                placeholder='Search city...'
                value={cityQuery}
                onChange={(event) => {
                    setCityQuery(event.target.value)
                }}
            />
        </fieldset>
    )
}

export default CityInput;