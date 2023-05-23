import { VscColorMode } from "react-icons/vsc";

function ColorThemeToggle ({ colorTheme, setColorTheme }) {

    const toggleHandle = () => {
        setColorTheme((prevTheme) => {
            return prevTheme < 1 ? prevTheme + 1 : prevTheme - 1; 
        })
    }


    return (
        <button onClick={toggleHandle} className={`toggle-button ${colorTheme ? "really-light-gray-bg": "dark-grayish-blue-bg"} ${colorTheme ? "black-fc" : "white-fc"}`}><VscColorMode className="color-theme-icon" /></button>
    )
}

export default ColorThemeToggle;