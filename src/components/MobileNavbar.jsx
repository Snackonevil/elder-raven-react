import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logos/nav-logo.png";
import styled from "styled-components";

const test = true;

function MobileNavbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const StyledNav = styled.nav`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0px;
        position: fixed;
        height: ${toggleMenu ? "100vh" : "100px"};
        z-index: 5;
        transition: 0.4s ease-in-out;

        .logo {
            margin-top: 28px;
            padding: 0px;
            display: flex;
            justify-content: space-between;
        }

        .nav-links {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 0px;
            margin: 0px;

            li {
                color: white;
                padding: 40px 0px;
                margin: 0px;
            }
        }
    `;
    return (
        <StyledNav>
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="elder-raven-logo-nav" />
                </Link>
                <div>bars</div>
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
        </StyledNav>
    );
}

export default MobileNavbar;
