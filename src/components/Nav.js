import cartIcon from '../assets/cartIcon.png';

const Nav = ({handleClick, showCart}) => {

    return (
        <nav className='wrapper'>
            <ul>
                <li className='cartLink'>
                    <button onClick={handleClick} className={showCart ? 'exitCart' : 'cartIcon'}>
                        {
                            showCart
                                ? 'X'
                                : < img src={cartIcon} alt='Shopping cart'/>
                        }
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

