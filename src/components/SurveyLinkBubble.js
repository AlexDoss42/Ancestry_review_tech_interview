import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageContext } from "../Contexts/PageContext";


const SurveyLinkBubble = () => {
    const { setOrigin_page, setPath } = useContext(PageContext);
    const location = useLocation();

    useEffect(() => {
        
    }, [setOrigin_page, setPath, location.pathname])
    
    const surveyHandler = async () => {
        await setPath(location.pathname);
        await setOrigin_page(window.location.href);
        window.location = "/survey"
    }

    return (
        <div>
            <p>We want to hear from you!</p>
            <p>Do you mind taking a quick survey to help us</p>
            <button onClick={e => surveyHandler()}>Survey</button>
        </div>
    )
}

export default SurveyLinkBubble;
