import React from 'react';
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
    const navigate = useNavigate();


    return (
        <>
            <h1>This is the Thank you page</h1>
            <button>Leave Browser</button>
            {/* WE are going to want to change that to the redux value for the page they hit the link for */}
            {/* <button onClick={()=> navigate(window.location.href)}>Return to your page</button> */}
        </>
    )
};

export default Thankyou;
