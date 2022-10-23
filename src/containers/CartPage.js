import { useDispatch, useSelector } from 'react-redux';
import MediaControlCard from './ItemBox'
import { useNavigate} from "react-router-dom";

export default function CartPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const res = useSelector(state => state)
    console.log(res)
    const none = res.items.length !== 0 ? <div></div> :<div className='asd5'><p>Empty</p></div>;
    return <div className='card_box_con'>
        {none}
        {res.items.map(elem => {
            return <MediaControlCard key={`${elem.name}${elem.amount}`} name={elem.name} amount={elem.amount} credits={(elem.credits)}/>
        })}
        <div className='asd3'>
            <p className='text_p'>Total amount of credits: {res.items.length !== 0 ? res.items.map(elem => elem.amount * elem.credits).reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}) : 0}</p>
            <div>
            <button className='but_catalog_page' onClick={() => navigate(`/catalog`)}>Catalog</button>
            <button className='but_add_bank'>Continue</button>
            </div>
        </div>
    </div>
}