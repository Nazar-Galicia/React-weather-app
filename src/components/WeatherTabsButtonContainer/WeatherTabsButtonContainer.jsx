import {memo} from 'react'
import './WeatherTabsButtonContainer.css'

const WeakWeatherTabButtonContainer = (props) => {
    const {
        weatherTab,
        setWeatherTab,
    } = props

    return (
        <div className='weather-main-info__tabs'>
            <button
                onClick={() => {
                    setWeatherTab('today')
                }}
                className={`
                        weather-main-info__tabs-button 
                        ${weatherTab === 'today' ? 'weather-tabs__button--active' : ''}
                    `}
            >
                Today
            </button>
            <button
                className={`
                        weather-main-info__tabs-button 
                        ${weatherTab === 'week' ? 'weather-tabs__button--active' : ''}
                    `}
                onClick={() => {
                    setWeatherTab('week')
                }}
            >
                Week
            </button>
        </div>
    )
}

export default memo(WeakWeatherTabButtonContainer)