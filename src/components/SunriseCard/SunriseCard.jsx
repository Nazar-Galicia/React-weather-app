import WeatherHighlightCardBase from "@/components/WeatherHighlightCardBase/WeatherHighlightCardBase.jsx";
import './SunriseCard.css'

const SunriseCard = (props) => {
    const {
        sunset,
        sunrise,
    } = props

    return (
        <WeatherHighlightCardBase
            title='Sunset and sunrise'
            iconSrc='../../../public/icons/highlight-sunrise.png'
        >
            <div className="sun-card">

                <div className="sun-card__item">
                    <div className="sun-card__icon">
                        <img src="../../../public/sunrise.png" alt="Sunrise" />
                    </div>

                    <div>
                        <p className="sun-card__time">{sunrise}</p>
                        <span className="sun-card__label">Sunrise</span>
                    </div>
                </div>

                <div className="sun-card__item">
                    <div className="sun-card__icon">
                        <img src="../../../public/sunset.png" alt="Sunset" />
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