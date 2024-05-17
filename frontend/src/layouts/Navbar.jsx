import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [stickyClass, setStickyClass] = useState(false);
    const [menu, setMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);

        return () => {
            window.removeEventListener("scroll", stickNavbar);
        };
    }, []);

    useEffect(() => {
        setMenu(false);
    }, [location]);

    const stickNavbar = () => {
        window.scrollY > 10 ? setStickyClass(true) : setStickyClass(false);
    };

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    const navbarItem = `cursor-pointer text-white font-extrabold  hover:text-black duration-500 uppercase`;

    return (
        <nav
            className={`w-full z-30 lg:p-0 lg:px-0 lg:pt-0 md:pt-0 bg-secondary transform duration-500 ${
                stickyClass ? "fixed top-0 " : "block"
            }`}
            
        >
            <div className="flex flex-row justify-between p-5 px-5">
                <div className="lg:flex hidden ml-6">
                    <nav className="ml-11 md:flex flex-row items-center font-bold text-xl gap-10 uppercase " id="font-family">
                        <NavLink to="/" className={navbarItem} onClick={closeMenu}>
                            ACCUEIL
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={navbarItem}
                            onClick={closeMenu}
                        >
                            QUI SOMMES-NOUS
                        </NavLink>
                        <NavLink
                            to="/metiers"
                            className={navbarItem}
                            onClick={closeMenu}
                        >
                            NOS Métiers
                        </NavLink>
                        <NavLink
                            to="/references"
                            className={navbarItem}
                            onClick={closeMenu}
                        >
                            références
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={navbarItem}
                            onClick={closeMenu}
                        >
                            Contact
                        </NavLink>
                    </nav>
                </div>
                <h1
                    className="lg:hidden font-bold text-white text-2xl"
                    id="font"
                >
                    BATIHOUSSE
                </h1>
                <div className="md:hidden flex items-center cursor-pointer">
                    {menu ? (
                        <AiOutlineClose
                            size={25}
                            onClick={toggleMenu}
                            color={"white"}
                        />
                    ) : (
                        <AiOutlineMenuUnfold
                            size={25}
                            onClick={toggleMenu}
                            color={"white"}
                        />
                    )}
                </div>
            </div>
            <div
                className={`lg:hidden ${
                    menu ? "block" : "hidden"
                } transition-all duration-500`}
            >
                <div className="flex flex-col text-white left-0 top-12 font-bold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit uppercase">
                    <NavLink to="/" className="cursor-pointer" onClick={closeMenu}>
                        ACCUEIL
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="cursor-pointer"
                        onClick={closeMenu}
                    >
                        QUI SOMMES-NOUS
                    </NavLink>
                    <NavLink
                        to="/metiers"
                        className="cursor-pointer"
                        onClick={closeMenu}
                    >
                        NOS Métiers
                    </NavLink>
                    <NavLink
                        to="/references"
                        className="cursor-pointer"
                        onClick={closeMenu}
                    >
                        références
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="cursor-pointer"
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

const NavLink = ({ to, children, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={isActive ? "text-black" : "text-white hover:text-black"}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};
