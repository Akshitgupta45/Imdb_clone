import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./home.css";
import MovieList from "../../component/movielist/MovieList";

const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	useEffect(() => {
		getMoviesData();
	}, []);

	const getMoviesData = async () => {
		let result = await fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=dbd01bd3710cb762d8fa16f2fb210675&language=en-US"
		);
		result = await result.json();
		// console.log(result);
		setPopularMovies(result.results);
	};
	return (
		<>
			<div className="poster">
				<Carousel
					showThumbs={false}
					autoPlay={true}
					transitionTime={3}
					infiniteLoop={true}
					showStatus={false}
				>
					{popularMovies.map((movie) => {
						return (
							<Link
								style={{ textDecoration: "none", color: "white" }}
								to={`/movie/${movie.id}`}
								key={movie.id}
							>
								<div className="posterImage">
									<img
										alt="poster"
										src={`https://image.tmdb.org/t/p/original${
											movie && movie.backdrop_path
										}`}
									/>
								</div>
								<div className="posterImage__overlay">
									<div className="posterImage__title">
										{movie ? movie.title : ""}
									</div>
									<div className="posterImage__runtime">
										{movie ? movie.release_date : ""}
										<span className="posterImage__rating">
											{movie ? movie.vote_average : ""}
											&nbsp;
											<i className="fas fa-star" />
										</span>
									</div>
									<div className="posterImage__description">
										{movie ? movie.overview : ""}
									</div>
								</div>
							</Link>
						);
					})}
				</Carousel>
				<MovieList />
			</div>
		</>
	);
};

export default Home;
