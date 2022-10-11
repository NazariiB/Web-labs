import { useState } from 'react';
import Select from 'react-select';
import MultiActionAreaCard from './bankCard.js';

const options1 = [
    {
      label: "None",
      value: "none",
    },
    {
      label: "Clients",
      value: "clients",
    },
    {
      label: "Credits",
      value: "credits",
    },
    {
      label: "Name",
      value: "name",
    },
  ];
const options2 = [
    {
      label: "None",
      value: "none",
    },
    {
      label: "Descending",
      value: "descending",
    },
    {
      label: "Ascending",
      value: "ascending",
    }
  ];


export default function Catalog(props) {
    const [cards, setCard] = useState([
        {name:"mono", clients:"100", credits:"200"},
        {name:"private", clients:"120", credits:"110"},
        {name:"oschad", clients:"50", credits:"250"},
        {name:"finance", clients:"300", credits:"50"},
        {name:"credi", clients:"170", credits:"290"},
    ])
    const [arr, setArr] = useState(cards);

    const [filter1, filterItem] = useState('');
    const [filter2, filterItem2] = useState('');
    const [input, setInput] = useState('');

    const applyOnClick = (e) => {
      let sortBy = false;
      if(!filter1 && !filter2) {
        return
      }
      if(filter2) {
        sortBy = filter2 === 'ascending' ? true : false;
      }
      if(String(filter1) === 'clients') {
        cards.sort( (fir, sec) => sortBy ? Number(fir.clients) - Number(sec.clients) : Number(sec.clients) - Number(fir.clients))
        setCard([...cards])
      } else if(String(filter1) === 'credits') {
        cards.sort( (fir, sec) => sortBy ? Number(fir.credits) - Number(sec.credits) : Number(sec.credits) - Number(fir.credits))
        setCard([...cards])
      } else {
        cards.sort((fir, sec) => sortBy ? fir.name.localeCompare(sec.name) : sec.name.localeCompare(fir.name))
        setCard([...cards])
      }
    }

    const search = (e) => {
      const str = e.target.value;
      setInput(str)
      const res = arr.filter(elem => 
        elem.name.includes(str) || elem.clients.includes(str) || elem.credits.includes(str)
      )
      console.log(res)
      setCard([...res])
    }


    return <main className='main_catalog'>
        <div className='catalog_main'>
            <div className='catalogDiv'>
                <div>
                <select value={filter1} onChange={e => filterItem(e.target.value)} className='select_filter' >
                {options1.map((option) => (
                    <option value={option.value}>{option.label}</option>))}
                </select>
                <select value={filter2} className='select_filter' onChange={e => filterItem2(e.target.value)}>
                    {options2.map((option) => (
                    <option value={option.value}>{option.label}</option> ))}
                </select>
                </div>
                <div className='second_catalog'>
                  <input className='input_catalog' type="text" name="name" value={input} onChange={e => search(e)}/>
                  <button onClick={applyOnClick} className='catalog_but'>Apply</button>
                </div>
            </div>
            <hr className='hr_catalog'/>
            <div className='catalog_lov'>
                {cards.map((card, index) => 
                    <MultiActionAreaCard data={card} key={index}/>
                )}
            </div>
        </div>
    </main>
}