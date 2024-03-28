import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import "../styles/NavBar.css";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className="nav-wrapper">
				<NavBarMobile
					isOpen={isOpen}
					toggleMenu={toggleMenu}
				/>
				<div className="nav-content">
					<a
						href="#"
						className="logo"
					>
						<span className="logo-font">Hello Word</span>
					</a>
					<ul>
						<li>
							<a
								href="#"
								className="menu-item"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="menu-item"
							>
								Skills
							</a>
						</li>
						<li>
							<a
								href="#"
								className="menu-item"
							>
								Experiencia
							</a>
						</li>
						<li>
							<a
								href="#"
								className="menu-item"
							>
								Proyectos
							</a>
						</li>
						<button className="btn-contact">Contáctame</button>
					</ul>
					<button
						type="button"
						className="btn-menu"
						onClick={toggleMenu}
					>
						{isOpen ? <FaXmark /> : <FaBars />}
					</button>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
