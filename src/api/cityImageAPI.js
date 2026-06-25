const API_KEY = 'Q5PligWn4ng6ZOlaD1FlKvYRwyh6RKCCyewqz5MKMHeGzsl9YQ6YN4sr'

const URL = 'https://api.pexels.com/v1/search?orientation=landscape&size=small&per_page=1'

export const cityImageAPI = {
    getCityImage: (query) => {
        return fetch(`${URL}&query=${query}`, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(res => res.json())
    }
}