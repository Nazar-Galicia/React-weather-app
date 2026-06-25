import {memo} from "react";
import './WeatherHighlightsContainer.css'
import WeatherHighlightsList from "@/components/WeatherHighlightsList/WeatherHighlightsList.jsx";

const WeatherHighlightsContainer = () => {
    return (
        <div className="weather-main-info__highlights-container">
            <h2 className="weather-main-info__highlights-title">
                Today's Highlights
            </h2>

            <WeatherHighlightsList />
        </div>
    )
}

export default memo(WeatherHighlightsContainer);