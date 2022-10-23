import * as React from 'react';
import ThemeContext from './Context';
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from '../image/112.jpg';
import Loading from './Loading.js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSelect } from '@mui/base';
import Popup from 'reactjs-popup';
const { getBank } = require('../request/getInfo.js');

export default function ItemPage () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const res = useSelector(state => state)
    const addBank = () => {
        alert("successfully added bank");
        getBank(params.id).then(result => {
            const res = result[0]
            console.log(res[1])
            dispatch({type:'ADD_BANK', name:res[1], credits:res[2] })
        })
    }
    const [info, setInfo] = useState(<Loading />);
    const params = useParams();


    useEffect(() => {
        setTimeout(() => {
            getBank(params.id).then(result => {
                const res = result[0]
                setInfo([<h2>Name: {res[1]}</h2>,
                <h3>Credits: {res[2]}</h3>,
                <h3>Clients: {res[3]}</h3>])
            })
        }, 1000)
    }, [])
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
                {info}
            </div>
            <div> 
                <button className='but_catalog_page' onClick={() => navigate(`/catalog`)}>Go back</button>
                <button onClick={addBank} className='but_add_bank'>Add to card</button>
            </div>
        </div>
    </div>
}