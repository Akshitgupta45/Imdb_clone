import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/card";
import "./movieList.css";

const MovieList = () => {
	const [movieList, setMovieList] = useState([]);
	const { type } = useParams();

	// useEffect(() => {
	// 	getData();
	// }, []);

	useEffect(() => {
		getData();
	}, [type]);

	const getData = async () => {
		// let result = await fetch(
		// 	`https://api.themoviedb.org/3/movie/${
		// 		type ? type : "popular"
		// 	}api_key=dbd01bd3710cb762d8fa16f2fb210675&language=en-US        `
		// );
		let data = await fetch(
			`https://api.themoviedb.org/3/movie/${
				type ? type : "popular"
			}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
		);
		data = await data.json();
		console.log("popular movies", data);
		setMovieList(data.results);
	};
	return (
		<>
			<div className="movie__list">
				<h2 className="list__title">
					{(type ? type : "POPULAR").toUpperCase()}
				</h2>
				<div className="list__cards">
					{movieList.map((movie) => {
						return <Card movie={movie} />;
					})}
				</div>
			</div>
		</>
	);
};
export default MovieList;
