import React from "react";

const SurveyLinkBubble = ({ dispatch }) => {

    
    const surveyHandler = () => {
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
