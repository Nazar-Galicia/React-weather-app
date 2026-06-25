import WeatherHighlightCardBase from "@/components/WeatherHighlightCardBase/WeatherHighlightCardBase.jsx";
import './SunriseCard.css'
import HighlightSunriseIcon from '../../../public/icons/highlight-sunrise.png'
import SunriseIcon from '../../../public/sunrise.png'
import SunsetIcon from '../../../public/sunset.png'

const SunriseCard = (props) => {
    const {
        sunset,
        sunrise,
    } = props

    return (
        <WeatherHighlightCardBase
            title='Sunset and sunrise'
            iconSrc={HighlightSunriseIcon}
        >
            <div className="sun-card">

                <div className="sun-card__item">
                    <div className="sun-card__icon">
                        <img src={SunriseIcon} alt="Sunrise" />
                    </div>

                    <div>
                        <p className="sun-card__time">{sunrise}</p>
                        <span className="sun-card__label">Sunrise</span>
                    </div>
                </div>

                <div className="sun-card__item">
                    <div className="sun-card__icon">
                        <img src={SunsetIcon} alt="Sunset" />
                    </div>

                    <div>
                        <p className="sun-card__time">{sunset}</p>
                        <span className="sun-card__label">Sunset</span>
                    </div>
                </div>

            </div>
        </WeatherHighlightCardBase>
    )
}

export default SunriseCard