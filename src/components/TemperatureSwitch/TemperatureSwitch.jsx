import {useContext} from "react";
import {WeatherContext} from "@/context/weatherContext.jsx";
import './TemperatureSwitch.css'

const TemperatureSwitch = () => {
    const {
        unit,
        setUnit,
    } = useContext(WeatherContext)

    return (
        <div className="temperature-switch">
            <button
                className={`temperature-switch__button ${unit === "c" ? "temperature-switch__button--active" : ""}`}
                onClick={() => setUnit("c")}
            >
                °C
            </button>

            <button
                className={`temperature-switch__button ${unit === "f" ? "temperature-switch__button--active" : ""}`}
                onClick={() => setUnit("f")}
            >
                °F
            </button>

            <div
                className={`temperature-switch__slider ${
                    unit === "f"
                        ? "temperature-switch__slider--right"
                        : ""
                }`}
            />
        </div>
    )
}

export default TemperatureSwitch