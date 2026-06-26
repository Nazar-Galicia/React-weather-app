import CityInput from "@/components/CityInput/CityInput.jsx";
import './CitySearch.css'
import {useContext} from "react";
import {WeatherContext} from "@/context/weatherContext.jsx";
import CitySearchItem from "@/components/CitySearchItem/CitySearchItem.jsx";

const CitySearch = () => {
    const {
        geocodeCities,
        setSelectedCity,
        isDropdownOpen,
    } = useContext(WeatherContext);

    return (
        <div className="city-search">

            <CityInput />

            <div className="city-search__dropdown">
                {
                    isDropdownOpen && geocodeCities.length !== 0 ? geocodeCities.map((item) => (
                        <CitySearchItem
                            key={item.place_id}
                            address={item.address}
                            onClick={() => setSelectedCity(item)}
                        />
                    )) : null
                }
            </div>

        </div>
    )
}

export default CitySearch