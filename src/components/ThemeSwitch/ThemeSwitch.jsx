import './ThemeSwitch.css'
import {useEffect, useState} from "react";

const ThemeSwitch = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className="theme-switch">
            <button
                className={`theme-switch__button ${
                    theme === "light" ? "theme-switch__button--active" : ""
                }`}
                onClick={() => setTheme("light")}
                aria-label="Light theme"
            >
                ☀️
            </button>

            <button
                className={`theme-switch__button ${
                    theme === "dark" ? "theme-switch__button--active" : ""
                }`}
                onClick={() => setTheme("dark")}
                aria-label="Dark theme"
            >
                🌙
            </button>

            <div
                className={`theme-switch__slider ${
                    theme === "dark"
                        ? "theme-switch__slider--right"
                        : ""
                }`}
            />
        </div>
    )
}

export default ThemeSwitch;