import React from 'react';

const Navbar = () => {

    return (
        <div style={{ background: "#38362D"}} >
            <nav>
                <h3  style={{ display: 'inline-block', color: '#fff' }}>Ancestry</h3>
                <ul style={{ listStyleType: "none", display: 'inline-block' }}>
                    <li style={{ display: 'inline-block', color: '#fff' }}>Home</li>
                    <li style={{ display: 'inline-block', color: '#fff' }}>DNA</li>
                    <li style={{ display: 'inline-block', color: '#fff' }}>Tree Page</li>
                    <li style={{ display: 'inline-block', color: '#fff' }}>Search</li>
                    <li style={{ display: 'inline-block', color: '#fff' }}>Extras</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
