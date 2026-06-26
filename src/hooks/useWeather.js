import {weatherAPI} from "@/api/weatherAPI.js";
import {useEffect, useRef, useState} from "react";
import toast from "react-hot-toast";
import {geocodeAPI} from "@/api/geocodeAPI.js";
import {cityImageAPI} from "@/api/cityImageAPI.js";

export const useWeather = () => {
    const [cityQuery, setCityQuery] = useState("");
    const [weatherData, setWeatherData] = useState({});
    const [isError, setIsError] = useState(false);
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [cityImageSrc, setCityImageSrc] = useState(null);
    const [geocodeCities, setGeocodeCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [unit, setUnit] = useState("c");
    const locationString = useRef('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(cityQuery);
        }, 150);

        return () => clearTimeout(timer);
    }, [cityQuery]);

    useEffect(() => {
        geocodeAPI.getLocationCords(cityQuery).then((data) => {
            if (cityQuery && data.length === 0) {
                setIsError(true);
                setIsDropdownOpen(false)
            } else {
                setGeocodeCities(data);
                setIsDropdownOpen(true);
                setIsError(false);
            }
        })
    }, [debouncedQuery]);

    useEffect(() => {
        if (geocodeCities.length !== 0) {
            console.log(selectedCity)
            setIsDropdownOpen(false)

            const {
                lat=0,
                lon=0,
                address,
            } = selectedCity;

            const cityCords = `${lat},${lon}`;

            if (Object.hasOwn(address, 'city')) {
                locationString.current = `${address.country}, ${address.city}`;
            } else if (Object.hasOwn(address, 'village')) {
                locationString.current = `${address.country}, ${address.village}`;
            } else if (Object.hasOwn(address, 'state')) {
                locationString.current = `${address.country}, ${address.state}`
            } else {
                locationString.current = address.country;
            }

            weatherAPI.getForecastWeatherData(cityCords, 7).then((data) => {
                console.log(data);
                setWeatherData(data);
                setIsError(false);
            })
                .catch((error) => {
                    setIsError(true);
                })
            if (locationString.current) {
                cityImageAPI.getCityImage(locationString.current).then((data) => {
                    console.log(data)
                    setCityImageSrc(data.photos[0].src.landscape)
                })
            }
        }
    }, [selectedCity]);

    // useEffect(() => {
    //     if (!debouncedQuery) return;
    //
    //     geocodeAPI.getLocationCords(cityQuery).then((data) => {
    //         console.log(data)
    //
    //         const lat = 0 || data[0]?.lat
    //         const lon = 0 || data[0]?.lon
    //         const address = data[0]?.address;
    //
    //         const cords = `${lat},${lon}`;
    //
    //         if (data.length !== 0) {
    //             if (Object.hasOwn(address, 'city')) {
    //                 locationString.current = `${address.country}, ${address.city}`;
    //             } else if (Object.hasOwn(address, 'village')) {
    //                 locationString.current = `${address.country}, ${address.village}`;
    //             } else {
    //                 locationString.current = address.country
    //             }
    //         }
    //         weatherAPI.getForecastWeatherData(cords, 7).then((data) => {
    //             console.log(data);
    //             setWeatherData(data);
    //             setIsError(false);
    //         })
    //             .catch(error => {
    //                 setIsError(true);
    //             })
    //
    //         if (locationString.current) {
    //             cityImageAPI.getCityImage(locationString.current).then((data) => {
    //                 console.log(data)
    //
    //                 setCityImageSrc(data.photos[0].src.landscape)
    //             })
    //         }
    //     })
    // }, [debouncedQuery]);

    useEffect(() => {
        if (isError) {
            toast.error("Location not found. Check the spelling.", {
                icon: "❌",
            });
        }
    }, [isError]);



    return {
        cityQuery,
        setCityQuery,
        weatherData,
        isError,
        locationString,
        cityImageSrc,
        unit,
        setUnit,
        geocodeCities,
        setSelectedCity,
        isDropdownOpen,
        setIsDropdownOpen,
    }
}