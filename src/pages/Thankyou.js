// import React, { useContext, useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Thankyou = () => {

    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(JSON.parse(window.localStorage.getItem('path')));
      }, []);

    // it appears that you can only close a tab with scripts on windows you have opened. Stack overflow and a few sites suggested something like this but most likely wouldn't work across all broswers.  I would ask a senior/team for ideas but might push back on this one.
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
            <Link to={path}>Return to your page</Link>
        </>
    )
};

export default Thankyou;
