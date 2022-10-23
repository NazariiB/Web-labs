import * as React from 'react';
import ThemeContext from './Context';
import {useNavigate} from "react-router-dom";
import MyImage from '../image/icons8-bank-50.png';
// import { BankOutlined } from "@ant-design/icons"
export default function Navbar() {
    const navigate = useNavigate();
    return <nav className="nav">
        <img src={MyImage} alt="logo"/>

        <ul className="nav-bar">
            <li>
                <button className='nav_but' onClick={() => navigate('/home')}>Home</button>
            </li>
            <li>
                <button className='nav_but' onClick={() => navigate('/catalog')}>Catalog</button>
            </li>
            <li>
                <button className='nav_but' onClick={() => navigate('/cart')}>Cart</button>
            </li>
        </ul>
        <hr className='nav_hr'/>
    </nav>
}