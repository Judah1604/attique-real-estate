import "../Styles/components/sections.css";

function Objective() {
	return (
		<div className="container objective">
			<img
				src="/skyscraper.jpg"
				alt="House"
				className="overlay left"
			/>
			<img
				src="/skyscraper.jpg"
				alt="House"
				className="overlay right"
			/>
			<div className="text">
				<img src="/star.png" alt="star" />
				<h1>
					If you can <i className="slanted">dream it</i>, we <br />
					can <i className="slanted">build it.</i>
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Reprehenderit iure unde quod maiores aspernatur quas
					veritatis corrupti possimus, voluptatum aut perspiciatis
					itaque blanditiis deleniti quibusdam harum ab. Incidunt odio
					illum ab consequuntur laboriosam natus consectetur, vel
					vitae expedita.
				</p>
                <a href="#" className="btn btn-dark">Get Started</a>
			</div>
		</div>
	);
}

export default Objective;
