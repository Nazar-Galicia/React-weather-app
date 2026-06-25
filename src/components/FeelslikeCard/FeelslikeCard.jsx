import WeatherHighlightCardBase from "@/components/WeatherHighlightCardBase/WeatherHighlightCardBase.jsx";
import './FeelslikeCard.css'
import {useContext} from "react";
import {WeatherContext} from "@/context/weatherContext.jsx";

const FeelslikeCard = (props) => {
    const {
        unit,
    } = useContext(WeatherContext)

    const {
        feelslike,
        temp,
    } = props

    return (
        <WeatherHighlightCardBase
            title='Feels like'
            iconSrc='../../../public/icons/highlight-temparature.png'
        >
            <div className="feels-card">

                <h2 className="feels-card__value">
                    {Math.round(feelslike)}
                    <span>{unit === 'c' ? '°C' : '°F'}</span>
                </h2>

                <div className="feels-card__status">
                    <div className="feels-card__status-icon">
                        <img
                            src={
                                feelslike > temp
                                    ? "../../../public/hot.png"
                                    : "../../../public/cold.png"
                            }
                            alt=""
                        />
                    </div>

                    <div className="feels-card__info">
                <span className="feels-card__label">
                    {feelslike > temp
                        ? "Feels warmer"
                        : feelslike < temp
                            ? "Feels cooler"
                            : "Feels the same"}
                </span>

                        <span className="feels-card__difference">
                    {Math.abs(
                        Math.round(feelslike - temp)
                    )}° difference
                </span>
                    </div>
                </div>

            </div>
        </WeatherHighlightCardBase>
    )
}

export default FeelslikeCard