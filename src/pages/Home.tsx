import React from 'react';
import Navbar from '../components/Navbar';
import SurveyLinkBubble from '../components/SurveyLinkBubble';

const Home = (): JSX.Element => {

    return (
        <div>
            <Navbar />
            <h1>This is the home page</h1>
            <SurveyLinkBubble />
        </div>
    )
};

export default Home;
