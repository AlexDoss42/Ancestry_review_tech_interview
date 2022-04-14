import React from 'react';
import Navbar from '../components/Navbar';
import SurveyLinkBubble from '../components/SurveyLinkBubble';

const Extras = (): JSX.Element => {

    return (
        <div>
            <Navbar />
            <h1>This is the Extras page</h1>
            <SurveyLinkBubble />
        </div>
    )
};

export default Extras;
