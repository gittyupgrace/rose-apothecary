import cartIcon from '../assets/cartIcon.png';

const Nav = () => {
    return (
        <nav className='wrapper'>
            <ul>
                <li className='cartLink'><img src={cartIcon} alt="Shopping cart" /></li>
            </ul>
        </nav>
    );
}

export default Nav;