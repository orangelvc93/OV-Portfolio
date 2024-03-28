import { Banner } from "./components/Banner";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<section className="container">
				<Banner />
			</section>
		</>
	);
}

export default App;
