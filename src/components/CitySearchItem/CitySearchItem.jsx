import LocationIcon from '../../../public/location.png'
import './CitySearchItem.css'
import {memo} from "react";

const CityInput = (props) => {
    const {
        address,
        onClick,
    } = props

    return (
        <button
            className="city-search__item"
            onClick={onClick}
        >

            <img
                className="city-search__item-icon"
                src={LocationIcon}
                alt="location-icon"
            />

            <div className="city-search__info">
                <span className="city-search__city">
                    {address.country}
                </span>

                <span className="city-search__country">
                    {
                        address.city ? address.city :
                            address.village ? address.village : address.state
                    }
                </span>
            </div>
        </button>
    )
}

export default memo(CityInput);