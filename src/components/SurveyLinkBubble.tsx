import React from "react";
import { Link } from "react-router-dom";

const SurveyLinkBubble = (): JSX.Element => {
    return (
        <div>
            <p>We want to hear from you!</p>
            <p>Do you mind taking a quick survey to help us?</p>
            <Link to="/survey">Survey</Link>
        </div>
    )
}

export default SurveyLinkBubble;
