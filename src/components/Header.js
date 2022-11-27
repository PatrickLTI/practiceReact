import logo from './logo192.png';


function Header() {
    return (
        <div>
            <nav className="nav">
                <div>
                    <img src={logo} alt="react" className="logo" />
                </div>
                <div className='test'>
                    <p>test</p>
                </div>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </nav>
        </div>
    );
}

export default Header;