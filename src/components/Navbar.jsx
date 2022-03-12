import { Link } from "react-router-dom";
import Logo from "../images/logos/nav-logo.png";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    return (
        <AnimatePresence>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                id="main-nav"
            >
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="elder-raven-logo-nav" />
                    </Link>
                </div>
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
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </motion.nav>
        </AnimatePresence>
    );
}

export default Navbar;
