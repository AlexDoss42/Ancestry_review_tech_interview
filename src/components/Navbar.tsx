import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {

    return (
        <div style={{ background: "#38362D"}} >
            <nav>
                <h3  style={{ display: 'inline-block', color: '#fff' }}>Ancestry</h3>
                <ul style={{ listStyleType: "none", display: 'inline-block' }}>
                    <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
                    <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to="/dna" style={{ color: '#fff' }}>DNA</Link></li>
                    <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to="/tree" style={{ color: '#fff' }}>Tree Page</Link></li>
                    <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to="/search" style={{ color: '#fff' }}>Search</Link></li>
                    <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to="/extras" style={{ color: '#fff' }}>Extras</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
