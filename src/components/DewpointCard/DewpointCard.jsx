import WeatherHighlightCardBase from "@/components/WeatherHighlightCardBase/WeatherHighlightCardBase.jsx";
import './DewpointCard.css'
import {useContext} from "react";
import {WeatherContext} from "@/context/weatherContext.jsx";
import HighlightDew from '../../../public/icons/highlight-dew.png'

const DewpointCard = (props) => {
    const {
        unit,
    } = useContext(WeatherContext);

    const {
        dewpoint,
    } = props;

    return (
        <WeatherHighlightCardBase
            title='Dewpoint'
            iconSrc={HighlightDew}
        >
            <div className="dew-card">

                <h2 className="dew-card__value">
                    {dewpoint}
                    <span>{unit === 'c' ? '°C' : '°F'}</span>
                </h2>

                <div className="dew-card__status">
                    <div className="dew-card__status-icon">
                        💧
                    </div>

                    <span>
                {dewpoint < 10
                    ? "Dry air"
                    : dewpoint < 16
                        ? "Comfortable"
                        : dewpoint < 20
                            ? "Humid"
                            : "Very humid"}
            </span>
                </div>

            </div>
        </WeatherHighlightCardBase>
    )
}

export default DewpointCard