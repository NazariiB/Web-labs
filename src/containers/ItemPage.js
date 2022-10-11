import * as React from 'react';
import ThemeContext from './Context';
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from '../image/112.jpg';

export default function ItemPage (props) {
    const params = useParams();
    const data = JSON.parse(JSON.stringify(params));
    const info = JSON.parse(data.id).data
    return <div className='main_item_container'>
        <div className='item_page_con'>
            <img className='img_item_page' src={logo}></img>
        </div>
        <div className='sec_item_page'>
            <div>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui 
                </h2>
            </div>
            <div>
            <h3>Clients: {info.clients}</h3>
            <h3>Credits: {info.credits}</h3>
            </div>
        </div>
    </div>
}