import cartIcon from '../assets/cartIcon.png';
import Cart from "./Cart";

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