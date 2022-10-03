import logo from '../image/icons8-bank-50.png';
import socials from '../image/socials.svg';

export default function Footer() {
    return <footer>
        <hr className='top_hr'/>
        <div className="foot_con">
            <div className="inn_con">
                <div className="left_foot">
                    <h2>Branding stuff</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo</p>
                </div>
                <div>
                    <img src={logo} className="foot_im" alt=""/>
                </div>
                <img src={socials} className="foot_im" alt=""/>
            </div>
            <hr className='boot_hr'/>
            <p className="footer_text">2020 IoT © Copyright all rights reserved, bla bla</p>
        </div>
    </footer>
}