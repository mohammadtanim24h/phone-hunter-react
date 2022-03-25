import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/home">Home</a>
                <a href="/categories">Categories</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
            </nav>
        </div>
    );
};

export default Header;