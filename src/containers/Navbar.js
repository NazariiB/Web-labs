import MyImage from '../image/icons8-bank-50.png';
// import { BankOutlined } from "@ant-design/icons"
export default function Navbar() {
    return <nav className="nav">
        <img src={MyImage} alt="logo"/>

        <ul className="nav-bar">
            <li>
                <a href="/home" className="li-elem">Home</a>
            </li>
            <li>
                <a href="/catalog" className="li-elem">Catalog</a>
            </li>
            <li>
                <a href="/cart" className="li-elem">Cart</a>
            </li>
        </ul>
        <hr/>
    </nav>
}