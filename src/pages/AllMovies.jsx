import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function All() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=57b75fd3bb7f3e28a2362d6568184208"
    )
      .then((Response) => Response.json())
      .then((results) => setMovie(results.data.docs));
  }, []);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          alt="/"
          style={{ height: "60vh", width: "100%" }}
          src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
        />

        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "60vh",
            background: "rgba(0,0,0,.5)",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "61px",
              fontWeight: "600",
              marginTop: "130px",
              padding: "50px",
            }}
          >
            All Movies
          </h1>
        </div>
        <div>
          <h1 style={{ padding: "50px", marginTop: "50px" }}>All Movies</h1>
          <div
            style={{
              padding: "30px",
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr)",
              gap: "1rem",
            }}
          >
            {movie.map((film) => (
              <div>
                <span onClick={() => navigate("/Detail/" + film._id)}>
                  <div
                    style={{
                      color: "black",
                      borderRadius: "10px",
                      width: "250px",
                      height: "400px",
                      marginLeft: "50px",
                      marginBottom: "50px",
                    }}
                  >
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </span>
              </div>
            ))}
          </div>

          <div style={{ background: "#f1f5f9" }}>
            <footer>
              <div></div>
              <div>
                <p>© 2021 MovieBox. All Right Reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;
