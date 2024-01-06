import "bootstrap/dist/css/bootstrap.min.css";
import './Styles/base/common.css'
import './Styles/base/media-queries.css'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Objective from "./components/Objective";
import Inclusions from "./components/Inclusions";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
            <HeroSection />
            <Objective />
            <Inclusions />
            <Footer />
		</>
	);
}

export default App;
