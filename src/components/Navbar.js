import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div style={{ background: "#38362D"}} >
            <nav>
                <h3  style={{ display: 'inline-block', color: '#fff' }}>Ancestry</h3>
                <ul style={{ listStyleType: "none", display: 'inline-block' }}>
                    <li style={{ display: 'inline-block', color: '#fff' }}><Link to="/">Home</Link></li>
                    <li style={{ display: 'inline-block', color: '#fff' }}><Link to="/dna">DNA</Link></li>
                    <li style={{ display: 'inline-block', color: '#fff' }}><Link to="/tree">Tree Page</Link></li>
                    <li style={{ display: 'inline-block', color: '#fff' }}><Link to="/search">Search</Link></li>
                    <li style={{ display: 'inline-block', color: '#fff' }}><Link to="/extras">Extras</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
