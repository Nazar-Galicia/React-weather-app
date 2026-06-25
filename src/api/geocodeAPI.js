const API_KEY = '6a3b7de813501189271944rqm123bfe'

const URL = `https://geocode.maps.co/search?api_key=${API_KEY}`

export const geocodeAPI = {
    getLocationCords: (locationQuery) => {
        return fetch(`${URL}&q=${locationQuery}`)
            .then(res => res.json())
    }
}