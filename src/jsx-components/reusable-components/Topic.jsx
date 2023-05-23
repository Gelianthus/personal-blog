import { useState, useRef, useContext } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { ColorThemeContext } from "../../Context";
import Rating from "./Rating";

function Topic (props) {

    const selectedTheme = useContext(ColorThemeContext);
    const [ isExpanded, setIsExpanded ] = useState(false);
    const headerRef = useRef(null);
    const expandHandle = () => {
        setIsExpanded(prevState => !prevState);
    }

    const hoverHandle = () => {
        if (selectedTheme) {
            headerRef.current.classList.add("really-light-gray-bg");
        } else {
            headerRef.current.classList.add("dark-grayish-blue-bg")
        }

    }
    const unHoverHandle = () => {
        if (selectedTheme) {
            headerRef.current.classList.remove("really-light-gray-bg");
        } else {
            headerRef.current.classList.remove("dark-grayish-blue-bg");
        }

    }
    const mouseDownHandle = () => {
        if (selectedTheme) {
            headerRef.current.classList.add("green-fc");
        } else {
            headerRef.current.classList.add("yellow-fc");
        }
        setTimeout(() => {
            if (selectedTheme) {
                headerRef.current.classList.remove("green-fc");
            } else {
                headerRef.current.classList.remove("yellow-fc");
            }
        }, 2000)
    }
    const mouseUpHandle = () => {
        if (selectedTheme) {
            headerRef.current.classList.remove("green-fc");
        } else {
            headerRef.current.classList.remove("yellow-fc");
        }
    }

    return (
        <section className="topic">
            <h2 className="topic-header" ref={headerRef} onMouseDown={mouseDownHandle} onMouseUp={mouseUpHandle} onMouseLeave={unHoverHandle} onMouseEnter={hoverHandle} onClick={expandHandle}>{ isExpanded ? <MdExpandLess className={`expand-icon ${selectedTheme ? "green-fill" : "yellow-fill"}`} /> : <MdExpandMore className={`expand-icon ${selectedTheme ? "green-fill" : "yellow-fill"}`} />}{props.title}</h2>
            <div className={`topic-body ${selectedTheme ? "really-light-gray-bg" : "dark-grayish-blue-bg"} ${isExpanded ? "" : "not-visible"}`}>
                {props.children}
                <hr />
                <Rating />
            </div>
        </section>
    )
}

export default Topic;