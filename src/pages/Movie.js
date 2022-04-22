import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const MoviePage = () => {
  let params = useParams();
  const { movies } = useFetch(`&i=${params?.id}`);

  return (
    <div className="container">
      <div className="row">
        <img className="bg-img" src={movies?.Poster} />
        <div className="movie-data">
          <h1>{movies?.Title}</h1>
          <p className="movie-desc">{movies?.Plot}</p>
          <p className="movie-year bold">{movies?.Year}</p>
          <Link to="/">
            <button className="back-btn">Back to Movies</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
