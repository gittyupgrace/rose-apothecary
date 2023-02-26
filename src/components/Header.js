import roseIcon from '../assets/roseIcon.png';

const Header = () => {
    return (
        <header>
            <ul className="wrapper">
                <li><div className='iconContainer'><img src={roseIcon} alt="" aria-hidden="true" /></div></li>
                <li><h1>Rose Apothecary</h1></li>
                <li><div className='iconContainer'><img src={roseIcon} alt="" aria-hidden="true" /></div></li>
            </ul>
        </header>
    );
}

export default Header;