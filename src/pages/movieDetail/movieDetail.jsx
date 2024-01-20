import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movieDetail.css";

const MovieDetail = () => {
	const { id } = useParams();
	const [currMovieDeatil, setCurrMovieDetail] = useState();

	useEffect(() => {
		getSingleMovie();
		window.scrollTo(0, 0);
	}, []);

	const getSingleMovie = async () => {
		let data = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=dbd01bd3710cb762d8fa16f2fb210675&language=en-US`
		);
		data = await data.json();
		// console.log("singleMovieData", data);
		setCurrMovieDetail(data);
	};
	return (
		<>
			<div className="movie">
				<div className="movie__intro">
					<img
						className="movie__backdrop"
						src={`https://image.tmdb.org/t/p/original${
							currMovieDeatil ? currMovieDeatil.backdrop_path : ""
						}`}
					/>
				</div>
				<div className="movie__detail">
					<div className="movie__detailLeft">
						<div className="movie__posterBox">
							<img
								className="movie__poster"
								src={`https://image.tmdb.org/t/p/original${
									currMovieDeatil ? currMovieDeatil.poster_path : ""
								}`}
								alt="posterbox"
							/>
						</div>
					</div>
					<div className="movie__detailRight">
						<div className="movie__detailRightTop">
							<div className="movie__name">
								{currMovieDeatil ? currMovieDeatil.original_title : ""}
							</div>
							<div className="movie__tagline">
								{currMovieDeatil ? currMovieDeatil.tagline : ""}
							</div>
							<div className="movie__rating">
								{currMovieDeatil ? currMovieDeatil.vote_average : ""}
								<i className="fas fa-star" />
								<span className="movie__voteCount">
									{currMovieDeatil
										? "(" + currMovieDeatil.vote_count + ") votes"
										: ""}
								</span>
							</div>
							<div className="movie__runtime">
								{currMovieDeatil ? currMovieDeatil.runtime + "mins" : ""}
							</div>
							<div className="movie__releaseDate">
								{currMovieDeatil
									? "Release date : " + currMovieDeatil.release_date
									: ""}
							</div>
							<div className="movie__genres">
								{currMovieDeatil && currMovieDeatil.genres
									? currMovieDeatil.genres.map((genre) => (
											<span className="movie__genre" id={genre.id}>
												{genre.name}
											</span>
									  ))
									: ""}
							</div>
						</div>
						<div className="movie__detailRightBottom">
							<div className="synopsisText">Synopsis</div>
							<div>{currMovieDeatil ? currMovieDeatil.overview : ""}</div>
						</div>
					</div>
				</div>
				<div className="movie__links">
					<div className="movie__heading">Useful Links</div>
					{currMovieDeatil && currMovieDeatil.homepage && (
						<a
							href={currMovieDeatil.homepage}
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<p>
								<span className="movie__homeButton movie__Button">
									Homepage<i className="newTab fas fa-external-link-alt"></i>
								</span>
							</p>
						</a>
					)}
					{currMovieDeatil && currMovieDeatil.imdb_id && (
						<a
							href={"https://www.imdb.com/title/" + currMovieDeatil.imdb_id}
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<p>
								<span className="movie__imdbButton movie__Button">
									IMDb<i className="newTab fas fa-external-link-alt"></i>
								</span>
							</p>
						</a>
					)}
				</div>
				<div className="movie__heading">Production companies</div>
				<div className="movie__production">
					{currMovieDeatil &&
						currMovieDeatil.production_companies &&
						currMovieDeatil.production_companies.map((company, index) => (
							<>
								{company.logo_path && (
									<span className="productionCompanyImage" key={index}>
										<img
											alt="company_logo"
											className="movie__productionComapany"
											src={
												"https://image.tmdb.org/t/p/original" +
												company.logo_path
											}
										/>
										<span>{company.name}</span>
									</span>
								)}
							</>
						))}
				</div>
			</div>
		</>
	);
};
export default MovieDetail;
