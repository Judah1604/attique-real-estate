import { motion } from "framer-motion";
import "../Styles/components/sections.css";

function Inclusions() {
	return (
		<div className="container inclusions">
			<img src="/gazebo.jpg" alt="House" className="bg" />
			<div className="text">
				<motion.h1
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ type: "tween" }}
					viewport={{ once: true }}
				>
					Our timeless <i>inclusions</i>
				</motion.h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Consectetur libero in odit quod voluptatum minus fuga unde
					accusamus voluptatibus dolorem consequuntur eum, at ipsa?
					Doloribus dolorum nihil exercitationem culpa optio.
				</p>
				<a href="#" className="btn btn-light">
					View Inclusions
				</a>
			</div>
		</div>
	);
}

export default Inclusions;
