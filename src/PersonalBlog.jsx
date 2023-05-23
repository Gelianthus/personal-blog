import { useState } from "react";
import ColorThemeToggle from "./jsx-components/ColorThemeToggle";
import Main from "./jsx-components/Main";
import Footer from "./jsx-components/Footer";
import { ColorThemeContext } from "./Context";

function PersonalBlog () {

    const [ colorTheme, setColorTheme ] = useState(0);

    return (
        <ColorThemeContext.Provider value={colorTheme}>
            <div className={`new-body ${ colorTheme ? "white-bg" : "darker-grayish-blue-bg"} ${colorTheme ? "black-fc" : "white-fc"}`}>
                <ColorThemeToggle colorTheme={colorTheme} setColorTheme={setColorTheme} />
                <Main />
                <Footer />
            </div>
        </ColorThemeContext.Provider>
    )
}

export default PersonalBlog;