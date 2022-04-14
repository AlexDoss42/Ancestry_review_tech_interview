import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (): JSX.Element => {

    return (
        <div className='container'>
            <nav>
                <h3>Ancestry</h3>
                <ul>
                    <li><Link className='link' to="/">Home</Link></li>
                    <li><Link className='link' to="/dna">DNA</Link></li>
                    <li><Link className='link' to="/tree">Tree Page</Link></li>
                    <li><Link className='link' to="/search">Search</Link></li>
                    <li><Link className='link' to="/extras">Extras</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
