import Weather from "@/components/Weather/Weather.jsx";
import WeatherContextProvider from "@/context/weatherContext.jsx";
import '@/styles/variables.css'

const App = () => {
    return (
        <WeatherContextProvider>
            <Weather />
        </WeatherContextProvider>
    )
}

export default App