import { useEffect, useState } from 'react';
import Select from 'react-select';
import MultiActionAreaCard from './bankCard.js';
import Loading from './Loading.js';
const { getBanks, getFilterredBanks } = require('../request/getInfo.js');

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


export default function Catalog() {
    const [cards, setCard] = useState([<Loading />])
    const [arr, setArr] = useState(cards);

    const [filter1, filterItem] = useState('');
    const [filter2, filterItem2] = useState('');
    const [input, setInput] = useState('');
    const applyOnClick = (e) => {
      setCard([<Loading />])

      setTimeout(() => {
        getFilterredBanks(`${!filter1 ? 'none': filter1}_${!filter2 ? 'none' : filter2}`)
          .then(res => {
            if(res === '') {
              setCard([...arr])
            } else {
              const temp = []
              for (const it of res) {
                let t = {}
                t.id = it[0];
                t.name = it[1];
                t.clients = it[2];
                t.credits = it[3];
                temp.push(t)
              }
              setCard([...temp])
              setArr([...temp])
            }
          })
        }, 1000)
      }

    useEffect( () => {
      setTimeout(() => {
        const temp = []
        getBanks().then((res) => {
          for (const it of res) {
            let t = {}
            t.id = it[0];
            t.name = it[1];
            t.clients = it[2];
            t.credits = it[3];
            temp.push(t)
          }
          setCard([...temp])
          setArr([...temp])
        })
      }, 1000);
    }, [])

    const search = (e) => {
      const str = e.target.value;
      setInput(str)
      const res = arr.filter(elem => elem.name.includes(str) || String(elem.clients).includes(str) || String(elem.credits).includes(str))
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
                {cards.map(card => {
                  if(card.type !== undefined && card.type.name === 'Loading'){
                    return card
                  } else {
                    return <MultiActionAreaCard data={card} key={card.id}/>
                  }
                })}
            </div>
        </div>
    </main>
}