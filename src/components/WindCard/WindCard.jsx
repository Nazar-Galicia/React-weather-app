import WeatherHighlightCardBase from "@/components/WeatherHighlightCardBase/WeatherHighlightCardBase.jsx";
import './WindCard.css'
import {memo} from "react";
import WindIcon from '../../../public/icons/highlight-wind.png'
import WindArrow from '../../../public/wind-arrow.png'

const WindCard = (props) => {
    const {
        wind_kph,
        wind_degree,
        wind_dir
    } = props

    return (
        <WeatherHighlightCardBase
            title='Wind'
            iconSrc={WindIcon}
        >
            <div className="wind-card">
                <h2 className="wind-card__speed">
                    {wind_kph}
                    <span> km/h</span>
                </h2>

                <div className="wind-card__direction">
                    <div className="wind-card__direction-icon">
                        <img
                            src={WindArrow}
                            alt="Wind direction"
                            style={{
                                transform: `rotate(${wind_degree}deg)`
                            }}
                        />
                    </div>

                    <span>{wind_dir}</span>
                </div>
            </div>
        </WeatherHighlightCardBase>
    )
}

export default memo(WindCard)