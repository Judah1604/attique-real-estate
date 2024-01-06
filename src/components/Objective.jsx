import { motion } from "framer-motion";
import "../Styles/components/sections.css";

function Objective() {
	return (
		<div className="container objective">
			<motion.img
				src="/skyscraper.jpg"
				alt="House"
				className="overlay left"
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
			/>
			<motion.img
				src="/pool.jpg"
				alt="House"
				className="overlay right"
				initial={{ x: 100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
			/>
			<div className="text">
				<img src="/star.png" alt="star" />
				<motion.h1
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ type: "tween" }}
					viewport={{ once: true }}
				>
					If you can <i>dream it</i>, we can{" "}
					<i>build it.</i>
				</motion.h1>
				<motion.p
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", delay: 0.3 }}
					viewport={{ once: true }}
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Reprehenderit iure unde quod maiores aspernatur quas
					veritatis corrupti possimus, voluptatum aut perspiciatis
					itaque blanditiis deleniti quibusdam harum ab. Incidunt odio
					illum ab consequuntur laboriosam natus consectetur, vel
					vitae expedita.
				</motion.p>
				<a href="#" className="btn btn-dark">
					Get Started
				</a>
			</div>
		</div>
	);
}

export default Objective;
