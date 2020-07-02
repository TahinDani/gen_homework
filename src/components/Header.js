import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Menu from './Menu'
import '../styles/Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-top content-container">
                    <Link to="/"><img className="Header-top-logo" src="/images/logo-big.png" alt=""/></Link>
                    <Menu />
                </div>
            </div>
        );
    }
}

export default Header;