import FooterLogo from "../images/logos/footer-logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div>
                <img src={FooterLogo} alt="footer-logo" />
            </div>
            <div className="gray-line"></div>
            <div className="footer-links">
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
                <a
                    href="https://www.instagram.com/elder_raven_leatherworking/"
                    rel="noreferrer"
                    target="_blank"
                >
                    INSTAGRAM
                </a>
            </div>
        </footer>
    );
}

export default Footer;
