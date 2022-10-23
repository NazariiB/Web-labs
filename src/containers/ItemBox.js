import { useState } from 'react';
import logo from '../image/112.jpg';
import ThemeContext from './Context';
import { useDispatch, useSelector } from 'react-redux';

export default function MediaControlCard({name, amount, credits}) {
  const dispatch = useDispatch();
  const res = useSelector(state => state);
  const [amm, setAmm] = useState(amount)
  const [credi, setCredi] = useState(credits);
  console.log(credits)
  console.log(amount)
  const setBank = (isAdd) => {
    if(isAdd){
      dispatch({type:'ADD_BANK', name:name, credits:credits })
      setAmm(amm + 1)
    } else {
      setAmm(amm - 1)
      dispatch({type:'DELETE_BANK', name:name })
    }
  }
  return <div className='box_card_bank'> 
      <div className='asd'>
        <img className='image_box' src={logo} alt="logo"/>
        <p>{name}</p>
      </div>
      <div className='asd2'>
        <div className='asd4'>
          <button onClick={() => setBank(true)} className='b1'>+</button>
          <p>{amm}</p>
          <button onClick={() => setBank(false)} className='b1'>-</button>
        </div>
        <p>{credi * amm}</p>
      </div>
    </div>

}