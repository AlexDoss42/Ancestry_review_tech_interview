import React, { useContext } from 'react';
import { PageContext } from '../Contexts/PageContext';
// import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
    const { path } = useContext(PageContext);
    // const navigate = useNavigate();

    const onClose = async () => {
        console.log('on Close');
        window.opener = null;
        await window.open("", "_self");
        await window.close();
      };

    return (
        <>
            <h1>This is the Thank you page</h1>
            <button onClick={() => onClose()}>Leave Browser</button>
            <button onClick={() => window.close()}>Close Browser</button>
            {/* WE are going to want to change that to the redux value for the page they hit the link for */}
            {/* <button onClick={()=> navigate(window.location.href)}>Return to your page</button> */}
        </>
    )
};

export default Thankyou;
