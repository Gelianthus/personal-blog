import { useState, useContext, useRef } from "react";
import { FaStar} from "react-icons/fa";
import { ColorThemeContext } from "../../Context";

function Rating () {

    const selectedTheme = useContext(ColorThemeContext);
    const [ starRating, setStarRating ] = useState(0);
    
    const starOneRef = useRef(null);
    const starTwoRef = useRef(null);
    const starThreeRef = useRef(null);
    const starFourRef = useRef(null);
    const starFiveRef = useRef(null);

    const clickHandle = (starNumber) => {
        if (starNumber > 4) {
            starFiveRef.current.classList.add("gold-fc");
            starFourRef.current.classList.add("gold-fc");
            starThreeRef.current.classList.add("gold-fc");
            starTwoRef.current.classList.add("gold-fc");
            starOneRef.current.classList.add("gold-fc");
            setStarRating(5);
        } else if (starNumber > 3) {
            starFiveRef.current.classList.remove("gold-fc");
            starFourRef.current.classList.add("gold-fc");
            starThreeRef.current.classList.add("gold-fc");
            starTwoRef.current.classList.add("gold-fc");
            starOneRef.current.classList.add("gold-fc");
            setStarRating(4);
        } else if (starNumber > 2) {
            starFiveRef.current.classList.remove("gold-fc");
            starFourRef.current.classList.remove("gold-fc");            
            starThreeRef.current.classList.add("gold-fc");
            starTwoRef.current.classList.add("gold-fc");
            starOneRef.current.classList.add("gold-fc");
            setStarRating(3);
        } else if (starNumber > 1) {
            starFiveRef.current.classList.remove("gold-fc");
            starFourRef.current.classList.remove("gold-fc");
            starThreeRef.current.classList.remove("gold-fc");
            starTwoRef.current.classList.add("gold-fc");
            starOneRef.current.classList.add("gold-fc");
            setStarRating(2);
        } else if (starNumber > 0) {
            starFiveRef.current.classList.remove("gold-fc");
            starFourRef.current.classList.remove("gold-fc");
            starThreeRef.current.classList.remove("gold-fc");
            starTwoRef.current.classList.remove("gold-fc");          
            starOneRef.current.classList.add("gold-fc");
            setStarRating(1);
        }        
    }

    return (
        <div className="rating-container">
            <p className={`rating-message ${selectedTheme ? "green-fc" : "cream-yellow-fc"}`}>{starRating > 4 ? "Generally helpful": starRating > 3 ? "Personally helpful": starRating > 2 ? "Has a few valid points": starRating > 1 ? "Confusing" : starRating > 0 ? "Contains incorrect information" : ""}</p>
            <div className="rating">
                <button ref={starOneRef} onClick={() => clickHandle(1)} className="rate-button faded-black-fc"><FaStar className="star-icon"/></button>
                <button ref={starTwoRef} onClick={() => clickHandle(2)} className="rate-button faded-black-fc"><FaStar className="star-icon"/></button>
                <button ref={starThreeRef} onClick={() => clickHandle(3)} className="rate-button faded-black-fc"><FaStar className="star-icon"/></button>
                <button ref={starFourRef} onClick={() => clickHandle(4)} className="rate-button faded-black-fc"><FaStar className="star-icon"/></button>
                <button ref={starFiveRef} onClick={() => clickHandle(5)} className="rate-button faded-black-fc"><FaStar className="star-icon"/></button>
            </div>
        </div>
    )
}

export default Rating;
