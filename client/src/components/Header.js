import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
 
const Header = () => {
    return (
        <div className="header">
            <Link exact to="/" className="item">DashBoard</Link>
            <Link to="/notification/" className="item">Notification</Link>
            <Link to="/notification/" className="item">Script</Link>
            <Link to="/notification/" className="item">Statistics</Link>
        </div>
    );
};
 
export default Header;