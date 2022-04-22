import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const count = 4; //297   //30

export const HomePage = () => {
  let params = useParams();
  const [keyword, setKeyword] = useState("spider");
  const [currentPage, setCurrentPage] = useState(Number(params?.page) || 0);
  let { movies, errorMsg, totalCount } = useFetch(
    keyword !== "" ? `&s=${keyword}&p=${currentPage}` : ""
  );

  const goNextPage = () => {
    if (currentPage < totalCount / count) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Search Movies {currentPage}</h1>
      <input
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search smt"
        className="search-input"
      />
      {!!errorMsg && <p className="error-msg">{errorMsg}</p>}
      <div className="content">
        {/*movies?.map((movie) => (
          <a
            href={`http://localhost:3002/movies/${movie?.imdbID}`}
            className="movie"
          >
            <img className="movie-img" src={movie?.Poster} />
            <div className="movie-detail">
              <h3 className="movie-name">{movie?.Title}</h3>
              <p className="movie-year">{movie?.Year}</p>
            </div>
          </a>
        ))*/}
        {list
          .slice(currentPage * count, currentPage * count + count)
          .map((item) => (
            <h1>{item}</h1>
          ))}
        <Link to={currentPage > 1 ? `/page/${currentPage - 1}` : "/page/1"}>
          <button onClick={goPrevPage}>Prev</button>
        </Link>

        <Link
          to={
            currentPage < totalCount / count
              ? `/page/${currentPage + 1}`
              : `/page/${currentPage}`
          }
        >
          <button onClick={goNextPage}>Next</button>
        </Link>
      </div>
    </div>
  );
};
