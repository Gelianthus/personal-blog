import { useContext } from "react";
import { ColorThemeContext } from "../Context";

function PageIntro () {

    const selectedTheme = useContext(ColorThemeContext);

    return (
        <div className="introduction">
            <h1 className={`${selectedTheme ? "green-fc" : "yellow-fc"}`}>A year into Web Development</h1>
            <div className="author"><span className={`${selectedTheme ? "lime-fc" : "cream-yellow-fc"}`}>Angelo Nathaniel -</span> <span className={`${selectedTheme ? "lime-fc" : "cream-yellow-fc"}`}>May 16, 2023</span></div>
            <div className={`intro-content-container ${selectedTheme ? "really-light-gray-bg" : "dark-grayish-blue-bg"}`}>
                <p>Hello reader, my name is Angelo Nathaniel and this is my blog about my journey into Web Development. It has been a year since I decided to pursue a career in Web Development and I believe I'm just about ready to confidently discuss my overall experience without worrying if the information I'm relaying have a solid backing instead of ignorantly ranting about certain topics that I may not have enough knowledge or experience yet to form an opinion of. For this blog, I'm mostly going to talk about the struggles that I had, different approaches that I could have taken, and maybe share a little bit of techniques or skills that I learned along the way.</p>
                <p>My purpose for this blog is NOT to teach but to just simply express. Take everything you read with a grain of salt and definitely don't treat it as a word from the gospel. The topics that I'll be highlighting could be about something in a general sense or something very specific. </p>
            </div>
        </div>
    )
}

export default PageIntro;