import WeatherHighlightCardBase from "@/components/WeatherHighlightCardBase/WeatherHighlightCardBase.jsx";
import './PressureCard.css'
import PressureIcon from '../../../public/icons/highlight-pressure.png'

const PressureCard = (props) => {
    const {
        pressure_mb,
    } = props

    const pressureColor =
        pressure_mb < 1000
            ? "#3B82F6"
            : pressure_mb > 1025
                ? "#EF4444"
                : "#22C55E";

    return (
        <WeatherHighlightCardBase
            title='Pressure'
            iconSrc={PressureIcon}
        >
            <div className="pressure-card">

                <h2 className="pressure-card__value">
                    {pressure_mb}
                    <span> mb</span>
                </h2>

                <div className="pressure-card__status">
                    <div
                        className="pressure-card__status-dot"
                        style={{backgroundColor: pressureColor}}
                    ></div>

                    <span>
                {pressure_mb < 1000
                    ? "Low"
                    : pressure_mb > 1025
                        ? "High"
                        : "Normal"}
            </span>
                </div>

            </div>
        </WeatherHighlightCardBase>
    )
}

export default PressureCard