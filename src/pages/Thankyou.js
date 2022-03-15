import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PageContext } from '../Contexts/PageContext';

const Thankyou = () => {
    const { path } = useContext(PageContext);

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
            <Link to={path}>Return to your page</Link>
        </>
    )
};

export default Thankyou;
