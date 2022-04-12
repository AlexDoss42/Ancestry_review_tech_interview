import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SurveyLinkBubble from '../components/SurveyLinkBubble';
import { PageContext } from '../Contexts/PageContext';

const Tree = () => {
    const { setOriginPage, setPath } = useContext(PageContext);
    let url = JSON.stringify(window.location.href);
    let path = JSON.stringify(window.location.pathname);
   
    useEffect(() => {
        setOriginPage(url);
        setPath(path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path, url]);
    
    return (
        <div>
            <Navbar />
            <h1>This is the tree page</h1>
            <SurveyLinkBubble />
        </div>
    )
};

export default Tree;
