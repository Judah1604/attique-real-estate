import "../Styles/components/hero.css";

function HeroSection() {
	return (
		<div className="container hero row">
			<div className="text col-md-6">
				<p>Crafting Tomorrow's Living Spaces:</p>
				<h1>
					Set New Standards <br />
					in<i> Modern Home</i> <br />
					Construction
				</h1>
			</div>
            <img src="/skyscraper-nobg.png" alt="Skyscraper" />
		</div>
	);
}

export default HeroSection;
