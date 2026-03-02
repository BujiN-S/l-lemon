import Logo from './assets/icons_assets/Logo.svg';

function Footer() {
    return(
        <footer>
            <div>
                <img src={Logo} alt="Little Lemon Logo Footer" />
            </div>
            <div>
                <p>© 2024 Little Lemon Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;