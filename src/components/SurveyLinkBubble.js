import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PageContext } from "../Contexts/PageContext";


const SurveyLinkBubble = () => {
    const { setOrigin_page, setPath } = useContext(PageContext);
    const location = useLocation();
    console.log(location);

    const surveyHandler = () => {
        
        setOrigin_page(window.location.href);
    }

    return (
        <div>
            <p>We want to hear from you!</p>
            <p>Do you mind taking a quick survey to help us</p>
            <button>Survey</button>
        </div>
    )
}

export default SurveyLinkBubble;
