import { useRef, useState } from "react";
import PropTypes from "prop-types";

import "./TitleCards.css";

import { useEffect } from "react";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzQwMDNkYzc1NzRjMzM4MDU4ZGM1ODc5M2MxNDBjZCIsInN1YiI6IjY1YmI0MzI2ZTE4Yjk3MDE3Yjk5Yjk5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ifncRmwP0Rg0DF6I32Wq--5wrUoMHymX9ykntyOOpa0",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category || "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((movie, index) => (
          <div className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.original_title}
            />
            <p>{movie.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

TitleCards.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default TitleCards;
