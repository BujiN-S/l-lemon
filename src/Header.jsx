import Logo from './assets/icons_assets/Logo.svg';

function Header() {
    return (
        <header>
            <img src={Logo} alt="Little Lemon Logo" />
        </header>
    );  
}

export default Header;