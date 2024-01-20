import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./pages/home/Home";
import MovieList from "./component/movielist/MovieList";
import MovieDetail from "./pages/movieDetail/movieDetail";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie/:id" element={<MovieDetail />} />
					<Route path="/movies/:type" element={<MovieList />} />
				</Routes>
			</BrowserRouter>
			<h1>Imdb clone</h1>
		</div>
	);
}

export default App;
