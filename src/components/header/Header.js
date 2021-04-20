import React from 'react';
import logo from '../../images/logo.png'
import * as BS from 'react-bootstrap';

function Header() {
    return (
        <div className="header">
            <BS.Image width={200} src={logo} rounded />
        </div>
    )
}

export default Header
