import mainIm from '../image/3d-bank-ikona-12912421.jpg';
import nonIm from '../image/112.jpg';
import { useState } from 'react';

export default function HomePage() {
    const [arr, setArr] = useState([]);
    const item =
     <div className='fifth_con'>
        <img src={nonIm} className='non_image' alt=""/>
        <h2>New items</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
    </div>;
    const onClickButt = (e) => {
        if(arr.length === 0) {
            arr.push(item, item, item)
            setArr([...arr])
        } else {
            arr.length = 0
            setArr([...arr])
        }
        console.log(arr)
    }
    return <main>
        <div className="first_con">
            <div className="second_con">
                <img src={mainIm} className="main_image" alt="bank"/>
                <div className="third_con">
                    <h1 className="main_h">Heading</h1>
                    <p className="main_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                </div>
            </div>
            <div className='forth_con'>
                <div className='fifth_con'>
                    <img src={nonIm} className='non_image' alt=""/>
                    <h2>Tile 1 heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                </div>
                <div className='fifth_con'>
                    <img src={nonIm} className='non_image' alt=""/>
                    <h2>Tile 2 heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                </div>
                <div className='fifth_con'>
                    <img src={nonIm} className='non_image' alt=""/>
                    <h2>Tile 3 heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
                </div>
            </div>
            <div className='home_page_sec'>
                <div className='inn'>
                    {arr}
                </div>
                <button onClick={onClickButt} className='non_but'>View more</button>
            </div>
        </div>
    </main>
}