import Select from 'react-select';
import MultiActionAreaCard from './bankCard.js';
const arr = [<MultiActionAreaCard />, <MultiActionAreaCard />, <MultiActionAreaCard />]


export default function Catalog() {
    return <main className='main_catalog'>
        <div className='catalog_main'>
            <div className='catalogDiv'>
                <div>
                <select className='select_filter' name="cars" id="cars">
                  <option value="volvo">Filter</option>
                  <option value="saab">Filter1</option>
                  <option value="mercedes">Filter2</option>
                  <option value="audi">Filter3</option>
                </select>
                <select className='select_filter' name="cars" id="cars">
                  <option value="volvo">Filter</option>
                  <option value="saab">Filter1</option>
                  <option value="mercedes">Filter2</option>
                  <option value="audi">Filter3</option>
                </select>
                </div>
                <div className='second_catalog'>
                    <input className='input_catalog' type="text" name="name" />
                    <button className='catalog_but'>Apply</button>
                </div>
            </div>
            <hr className='hr_catalog'/>
            <div className='catalog_lov'>
                {arr}
            </div>
        </div>
    </main>
}