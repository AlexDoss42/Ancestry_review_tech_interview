import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageContext } from "../Contexts/PageContext";


const SurveyLinkBubble = () => {
    const { setOrigin_page, setPath, path, origin_page } = useContext(PageContext);
    const location = useLocation();

    useEffect(() => {
        console.log('useEffect Fired', path, origin_page);
        setPath(location.pathname);
        setOrigin_page(window.location.href);
    }, [])
    
    const surveyHandler = async () => {
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
