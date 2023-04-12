import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style/detailPage.css";


function Detail() {
  const [item, setItem] = useState({});
  const params = useParams();

  useEffect(() => {
    const getDetail = async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=57b75fd3bb7f3e28a2362d6568184208`
        );
        setItem(response.data);
    }
    getDetail();
  }, [params]);


  return (
    <>
      <div>
        <div className="banner">
          <img
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="mb-3 movie-content container">
          <div className="movie-info">
            <h1 className="title">{item.title || item.name}</h1>
            <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres-item">
                      {genre.name}
                    </span>
                  ))}
            </div>
            <h6>{"Release: " + item.release_date}</h6>
            <p className="overview">{item.overview}</p>
            <p className="rating">⭐ {(item.vote_average / 2).toFixed(1)} / 5 </p>
            <button className="button-trailer">Watch Trailer</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
