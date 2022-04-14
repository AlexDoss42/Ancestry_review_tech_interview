import React from 'react';
import Navbar from '../components/Navbar';
import SurveyLinkBubble from '../components/SurveyLinkBubble';

const DNA = (): JSX.Element => {

    return (
        <div>
            <Navbar />
            <h1>This is the DNA page</h1>
            <SurveyLinkBubble />
        </div>
    )
};

export default DNA;
