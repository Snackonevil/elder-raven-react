import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import Logo from "../images/logos/nav-logo.png";

function MobileNavbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggle = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <nav
            className="mobile-navbar"
            style={{ height: `${toggleMenu ? "100vh" : "100px"}` }}
        >
            <div>
                <div>
                    <Link to="/">
                        <img src={Logo} alt="elder-raven-logo-nav" />
                    </Link>
                </div>
                <Hamburger toggle={toggle} />
            </div>
            {toggleMenu ? (
                <ul className="nav-links">
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/elder_raven_leatherworking/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            INSTAGRAM
                        </a>
                    </li>
                </ul>
            ) : (
                ""
            )}
        </nav>
    );
}

export default MobileNavbar;
