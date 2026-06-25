import './Weather.css'
import WeatherSummary from "@/components/WeatherSummary/WeatherSummary.jsx";
import WeatherMainInfo from "@/components/WeatherMainInfo/WeatherMainInfo.jsx";
import { Toaster } from "react-hot-toast";

const Weather = () => {
    return (
        <div className='weather'>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={12}
                toastOptions={{
                    duration: 1500,

                    style: {
                        background: "#EF4444",
                        color: "#fff",
                        borderRadius: "18px",
                        padding: "16px 20px",
                        border: "none",
                        boxShadow: "0 12px 30px rgba(239,68,68,.25)",
                        fontSize: "15px",
                        fontWeight: "500",
                    },
                }}
            />

            <WeatherSummary />
            <WeatherMainInfo />
        </div>
    )
}

export default Weather