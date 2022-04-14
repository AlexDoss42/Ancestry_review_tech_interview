import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SurveyLinkBubble = (): JSX.Element => {

    let path: string = JSON.stringify(window.location.pathname);

    useEffect(() => {
        window.localStorage.setItem('path', path);
        console.log(1234, "survey link bubble is firiing", path);

      }, [path]);


    return (
        <div>
            <p>We want to hear from you!</p>
            <p>Do you mind taking a quick survey to help us?</p>
            <Link to="/survey">Survey</Link>
        </div>
    )
}

export default SurveyLinkBubble;
