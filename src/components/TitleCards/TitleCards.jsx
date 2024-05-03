import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./TitleCards.css";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
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
          <Link to={`/player/${movie.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.original_title}
            />
            <p>{movie.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

TitleCards.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
};

export default TitleCards;
