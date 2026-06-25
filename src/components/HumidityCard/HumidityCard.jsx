import WeatherHighlightCardBase from "@/components/WeatherHighlightCardBase/WeatherHighlightCardBase.jsx";
import './HumidityCard.css'
import HumidityIcon from '../../../public/icons/highlight-drop.png'

const HumidityCard = (props) => {
    const {
        humidity
    } = props

    return (
        <WeatherHighlightCardBase
            title='Humidity'
            iconSrc={HumidityIcon}
        >
            <div className="humidity-card">

                <h2 className="humidity-card__value">
                    {humidity}
                    <span>%</span>
                </h2>

                <div className="humidity-card__scale">
                    <div className="humidity-card__labels">
                        <span>Low</span>
                        <span>Normal</span>
                        <span>High</span>
                    </div>

                    <div className="humidity-card__bar">
                        <div
                            className="humidity-card__progress"
                            style={{
                                width: `${humidity}%`
                            }}
                        />
                    </div>

                    <span className="humidity-card__percent">
                        {humidity}%
                    </span>
                </div>
            </div>
        </WeatherHighlightCardBase>
    )
}

export default HumidityCard;