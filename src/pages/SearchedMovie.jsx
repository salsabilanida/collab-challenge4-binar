import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/card.css";
import Carousel from "../components/Carousel";


function SearchedMovie() {
  const location = useLocation();
  const { name } = location.state;
  const [searchedMovieList, setSearchedMovieList] = useState({});
  const [Movie, setResultName] = useState("");

  useEffect(() => {
    async function searchMovie() {
      try {
        const response = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&name=${name}`);
        console.log(JSON.stringify(response.data.results));
        setSearchedMovieList(response.data.results);
      } catch (error) {
        alert(error);
      }
    }
    setResultName(name);
    searchMovie();
  }, [name]);

  const PopularMovieCard = ({ title, poster, to }) => (
    <Card
      as={Link}
      to={to}
      className="Card-component"
      variant="outline-danger"
      style={{
        width: "18rem",
        margin: "10px",
        outlineColor: "red",
        outlineStyle: "outset",
        outlineWidth: "thin",
      }}
    >
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster}`} />
      <Card.Body style={{ color: "black" }}>
        <Card.Title style={{ color: "white" }}>
          <h4 className="text-center">{title}</h4>
        </Card.Title>
      </Card.Body>
    </Card>
  );

  return (
    <>
      <Carousel />
      <Container>
        <h2 className="text-danger p-4">Search Result: {Movie}</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {searchedMovieList.length > 0 && searchedMovieList.map((movie, i) => <PopularMovieCard key={i} title={movie.title} poster={movie.poster_path} to={`/detail/${movie.id}`} />)}
        </div>
      </Container>
    </>
  );
}

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export default SearchedMovie;
