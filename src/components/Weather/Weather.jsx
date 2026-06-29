import './Weather.css'
import WeatherSummary from "@/components/WeatherSummary/WeatherSummary.jsx";
import WeatherMainInfo from "@/components/WeatherMainInfo/WeatherMainInfo.jsx";
import { Toaster } from "react-hot-toast";
import WeekForecastModal from "@/components/WeekForekastModal/WeekForecastModal.jsx";
import {useContext, useEffect} from "react";
import {WeatherContext} from "@/context/weatherContext.jsx";

const Weather = () => {
    const {
        modalData,
    } = useContext(WeatherContext)

    useEffect(() => {
        if (Object.keys(modalData).length !== 0) {
            document.body.classList.add('modal-active');
        } else {
            document.body.classList.remove('modal-active');
        }
    }, [modalData])

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

            <WeekForecastModal />
            <WeatherSummary />
            <WeatherMainInfo />
        </div>
    )
}

export default Weather