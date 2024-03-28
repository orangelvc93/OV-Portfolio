import React from "react";
import "../styles/NavBarMobile.css";

const NavBarMobile = ({ isOpen }) => {
	return (
		<nav className={`mobile-menu ${isOpen ? "active" : ""}`}>
			<div className="mobile-menu-container">
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
					<button className="btn-contact btn-contact_mobile">Contáctame</button>
				</ul>
			</div>
		</nav>
	);
};

export default NavBarMobile;
