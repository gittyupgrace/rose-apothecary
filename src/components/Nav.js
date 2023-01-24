// import { Link } from 'react-router-dom';
import cartIcon from '../assets/cartIcon.png';


const Nav = () => {
    return (
        <nav className='wrapper'>
            <ul>
                <li><a href="" className='cartLink'><img src={cartIcon} alt="" /></a></li>
                {/*^use routing to create link between cart icon and <Cart /> component? */}
            </ul>
        </nav>
    )
}

export default Nav;