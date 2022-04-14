import React from 'react';
import Navbar from '../components/Navbar';
import SurveyLinkBubble from '../components/SurveyLinkBubble';

const Search = (): JSX.Element => {
   
    return (
        <div>
            <Navbar />
            <h1>This is the search page</h1>
            <SurveyLinkBubble />
        </div>
    )
};

export default Search;
