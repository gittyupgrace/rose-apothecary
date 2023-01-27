import cartIcon from '../assets/cartIcon.png';

const Nav = () => {
    return (
        <nav className='wrapper'>
            <ul>
                <li className='cartLink'><img src={cartIcon} alt="" /></li>
                {/*^use routing to create link between cart icon and <Cart /> component? */}
            </ul>
        </nav>
    )
}

export default Nav;