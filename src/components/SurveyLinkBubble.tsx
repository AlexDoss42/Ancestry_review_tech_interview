import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageContext } from '../Contexts/PageContext';

import './SurveyLinkBubble.css';

const SurveyLinkBubble = (): JSX.Element => {
    
    const { setOriginPage } = useContext(PageContext);

    let path: string = JSON.stringify(window.location.pathname);
    let url: string = JSON.stringify(window.location.href);

    useEffect(() => {
        setOriginPage(url);
        window.localStorage.setItem('path', path);
// eslint-disable-next-line react-hooks/exhaustive-deps
      }, [url, path]);


    return (
        <div className="bubble-container">
            <p>We want to hear from you!</p>
            <p>Do you mind taking a quick survey to help us?</p>
            <Link to="/survey">Survey</Link>
        </div>
    )
}

export default SurveyLinkBubble;
