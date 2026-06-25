const API_KEY = 'fc92822eb54249f3a53141731261906'

const URL = `https://api.weatherapi.com/v1`

export const weatherAPI = {
    getCurrentWeatherData: (query) => {
        return fetch(`${URL}/current.json?key=${API_KEY}&q=${query}`).then(res => res.json())
    },
    getForecastWeatherData: (query, days=1) => {
        return fetch(`${URL}/forecast.json?key=${API_KEY}&q=${query}&days=${days}`)
            .then(res => {
                    if (res.status === 400 && res.ok === false) {
                        throw new Error('city not found')
                    }
                    return res.json()
            })
    },
}