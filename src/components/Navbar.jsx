import '../Styles/components/nav.css';

function Navbar() {
  return (
		<div className="navbar py-4">
			<div className="container">
				<h1 className="logo">Attique</h1>
				<div className="nav">
					<a href="#" className="nav-link">Home</a>
					<a href="#" className="nav-link">Features</a>
					<a href="#" className="nav-link">About</a>
					<a href="#" className="nav-link">Inclusion List</a>
				</div>
                <div className="btn btn-dark">
                    Get Started
                </div>
			</div>
		</div>
  );
}

export default Navbar