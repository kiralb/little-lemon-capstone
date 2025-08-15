import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav style={{ padding: '1rem', background: '#f4f4f4' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0 }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about/aboutpage">About</Link>
                </li>
                <li>
                    <Link to="/menu/menupage">Menu</Link>
                </li>
                <li>
                    <Link to="/reservations/bookingpage">Reservations</Link>
                </li>
                <li>
                    <Link to="/orders/orderpage">Order</Link>
                </li>
                <li>
                    <Link to="/login/loginpage">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
