import logo from './logo192.png';


function Header() {
    return (
        <div>
            <nav className="nav">

                <img src={logo} alt="react" className="logo" />
                
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