import { Link } from 'react-router-dom';
import roseIcon from '../assets/roseIcon.png';

const Header = () => {
    return (
        <header>
            <ul className="wrapper">
                <li><div className='iconContainer'><img src={roseIcon} alt="rose icon" /></div></li>
                <li><Link><h1>Rose Apothecary</h1></Link></li>
                <li><div className='iconContainer'><img src={roseIcon} alt="rose icon" /></div></li>
            </ul>
        </header>
    )
}

export default Header;