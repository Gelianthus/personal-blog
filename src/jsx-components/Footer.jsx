import { useContext } from "react";
import { ColorThemeContext } from "../Context";

function Footer () {

    const selectedTheme = useContext(ColorThemeContext);

    return (
        <footer>
            <p className={`urls ${selectedTheme ? "teal-fc" : "green-fc"}`}>gelotandoc04@gmail.com</p>
            <a className={`urls ${selectedTheme ? "teal-fc" : "green-fc"}`} href="https://github.com/Gelianthus" target="_blank">github.com/Gelianthus</a>
            <a className={`urls ${selectedTheme ? "teal-fc" : "green-fc"}`} href="/" >Portfolio Site</a>
        </footer>
    )
}

export default Footer;