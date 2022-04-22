import { useEffect, useState } from "react";

//keywords
const API_ENPOINT = "http://www.omdbapi.com/?apikey=c2aa0bb2";

export const useFetch = (keyword) => {
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [errorMsg, setErrorMsg] = useState("");

  const fetchMovies = async (keyword) => {
    try {
      let response = await fetch(`${API_ENPOINT}${keyword}`);
      let data = await response.json();
      if (data?.Response === "True") {
        setMovies(data?.Search || data);
        setTotalCount(data?.totalResults || 0);
        setErrorMsg("");
      } else {
        setErrorMsg(data?.Error);
      }
    } catch (error) {
      setErrorMsg(error?.message);
    }
  };

  useEffect(() => {
    if (keyword !== "") {
      fetchMovies(keyword);
    }
  }, [keyword]);

  return { movies, errorMsg, totalCount };
};
