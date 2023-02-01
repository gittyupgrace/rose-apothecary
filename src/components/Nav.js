import cartIcon from '../assets/cartIcon.png';

const Nav = () => {
    return (
        <nav className='wrapper'>
            <ul>
                <li className='cartLink'><img src={cartIcon} alt="" /></li>
                {/*stretch goal: create pop-out capabilities for hidden cart by clicking cart icon*/}
            </ul>
        </nav>
    );
}

export default Nav;