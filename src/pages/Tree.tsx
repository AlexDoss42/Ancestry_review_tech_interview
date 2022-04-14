import React from 'react';
import Navbar from '../components/Navbar';
import SurveyLinkBubble from '../components/SurveyLinkBubble';

const Tree = (): JSX.Element => {
    
    return (
        <div>
            <Navbar />
            <h1>This is the tree page</h1>
            <SurveyLinkBubble />
        </div>
    )
};

export default Tree;
