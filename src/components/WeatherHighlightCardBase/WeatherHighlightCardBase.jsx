import {memo} from "react";
import './WeatherHighlightCardBase.css'

const WeatherHighlightCardBase = (props) => {
    const {
        children,
        title,
        iconSrc='#'
    } = props

    return (
        <figure className='weather-main-info__highlight-base'>
            <figcaption><img src={iconSrc} alt="highlight icon"/> {title}</figcaption>

            {children}
        </figure>
    )
}

export default memo(WeatherHighlightCardBase);