import React from "react";
import "../styles/Banner.css";
import perfil from "../../public/img/Perfil.jpg";

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa6";

export const Banner = () => {
	return (
		<section className="banner-container">
			<div className="banner-content">
				<h2>Build Digital Experiences that inspire</h2>
				<p>
					Passionate Frontend Developer | Transforming ideas into seamless and
					visually stunning Web solutions.
				</p>
			</div>

			<div className="social-wrap">
				<a
					href="#"
					className="social-icon"
				>
					<FaLinkedin />
				</a>
				<a
					href="#"
					className="social-icon"
				>
					<FaGithub />
				</a>
				<a
					href="#"
					className="social-icon"
				>
					<FaInstagram />
				</a>
				<a
					href="#"
					className="social-icon"
				>
					<FaFacebook />
				</a>
			</div>

			<div className="banner-profile">
				<img
					src={perfil}
					alt="Imagen de perfil"
				/>
			</div>
		</section>
	);
};
