import React from "react";
import "../styles/Banner.css";
import perfil from "/img/Perfil.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa6";

export const Banner = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<section
			ref={ref}
			className="banner-container container"
		>
			<div
				style={{
					transform: isInView ? "none" : "translateX(200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="banner-content"
			>
				<h2>Build Digital Experiences that inspire</h2>
				<p>
					Passionate Frontend Developer | Transforming ideas into seamless and
					visually stunning Web solutions.
				</p>
			</div>

			<div
				style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="social-wrap"
			>
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

			<div
				style={{
					transform: isInView ? "none" : "translateX(-100px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				className="banner-profile"
			>
				<img
					src={perfil}
					alt="Imagen de perfil"
				/>
			</div>
		</section>
	);
};
