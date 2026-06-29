import './WeekForecastModal.css'
import {useContext} from "react";
import {WeatherContext} from "@/context/weatherContext.jsx";

const WeekForecastModal = () => {
    const {
        setModalData,
        modalData,
        unit,
    } = useContext(WeatherContext)

    console.log(modalData)

    const {
        date='',
        condition,
        maxwind_kph,
        avghumidity,
        totalprecip_mm,
        uv,
    } = modalData

    const datestr = new Date(date)
    const dateWeekDay = datestr.toLocaleDateString('en-US', {
        weekday: 'long',
    });
    const dateMonthDate = datestr.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
    })

    return (
        <div className={`forecast-modal ${Object.keys(modalData).length !== 0 ? 'forecast-modal--active' : ''}`}>

            <div className="forecast-modal__overlay"></div>

            <div className="forecast-modal__content">

                <button
                    className="forecast-modal__close"
                    onClick={() => setModalData({})}
                >
                    ✕
                </button>

                <header className="forecast-modal__header">

                    <div>
                        <h2 className="forecast-modal__day">
                            {dateWeekDay}
                        </h2>

                        <p className="forecast-modal__date">
                            {dateMonthDate}
                        </p>
                    </div>

                    <img
                        className="forecast-modal__icon"
                        src={condition?.icon}
                        alt="condition icon"
                    />

                </header>

                <div className="forecast-modal__temperature">

            <span className="forecast-modal__max">
                {unit === 'c' ? modalData.maxtemp_c : modalData.maxtemp_f}
            </span>

                    <span className="forecast-modal__divider">
                /
            </span>

                    <span className="forecast-modal__min">
                {unit === 'c' ? modalData.mintemp_c : modalData.mintemp_f}
            </span>

                </div>

                <p className="forecast-modal__condition">
                    {condition?.text}
                </p>

                <div className="forecast-modal__grid">

                    <div className="forecast-modal__item">
                        <span>💨 Wind</span>
                        <strong>{maxwind_kph} km/h</strong>
                    </div>

                    <div className="forecast-modal__item">
                        <span>💧 Humidity</span>
                        <strong>{avghumidity}%</strong>
                    </div>

                    <div className="forecast-modal__item">
                        <span>🌧 Rain</span>
                        <strong>{totalprecip_mm}%</strong>
                    </div>

                    <div className="forecast-modal__item">
                        <span>☀️ UV Index</span>
                        <strong>{uv}</strong>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default WeekForecastModal