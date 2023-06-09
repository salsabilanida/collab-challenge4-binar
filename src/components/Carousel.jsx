import Carousel from "react-bootstrap/Carousel";
import img from "../assets/image/strange.jpg";
import React, { useState } from "react";

function CarouselNavbar() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <>
      {showTrailer && (
        <div
          onClick={() => setShowTrailer(false)}
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,.5)",
            zIndex: "9999",
            color: "white",
          }}
        >
          <div
            onClick={(e) => e.preventDefault()}
            style={{
              width: "800px",
              height: "500px",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${selectedMovie.trailerKey}?version=3&enablejsapi=1`}
              title="Bos Laknat"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}

      <div style={{ position: "relative" }}>
        <Carousel fade controls={false} interval={2000}>
          <Carousel.Item>
            <div style={{ position: "relative", height: "100vh" }}>
              <div
                style={{
                  position: "absolute",
                  left: "40px",
                  top: "190px",
                  zIndex: "20",
                  width: "600px",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: "61px",
                    fontWeight: "600",
                  }}
                >
                  Doctor Strange in the Multiverse of Madness
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginTop: "15px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  onClick={() => {
                    setShowTrailer(true);
                    setSelectedMovie({ trailerKey: "aWzlQ2N6qqg" });
                  }}
                  className=" bg-danger"
                  style={{
                    marginTop: "15px",
                    color: "white",
                    border: "50px",
                    borderRadius: "500px",
                    width: "170px",
                    height: "40px",
                    fontWeight: "700",
                  }}
                >
                  Watch Trailer
                </button>
                <img
                  alt=""
                  src="/icons/circle-play-regular.svg"
                  style={{
                    position: "relative",
                    right: "160px",
                    width: "15px",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,.5)",
                }}
              ></div>
              <img className="d-block w-100" src={img} alt="First slide" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ position: "relative", height: "100vh" }}>
              <div
                style={{
                  position: "absolute",
                  left: "40px",
                  top: "190px",
                  zIndex: "20",
                  width: "600px",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontSize: "61px",
                    fontWeight: "600",
                    marginTop: "70px",
                  }}
                >
                  Sang Kiai
                </h1>
                <p
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginTop: "15px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  onClick={() => {
                    setShowTrailer(true);
                    setSelectedMovie({ trailerKey: "R0Xa91FfiV8" });
                  }}
                  className=" bg-danger"
                  style={{
                    marginTop: "15px",
                    color: "white",
                    border: "50px",
                    borderRadius: "500px",
                    width: "170px",
                    height: "40px",
                    fontWeight: "700",
                  }}
                >
                  Watch Trailer
                </button>
                <img
                  alt=""
                  src="/icons/circle-play-regular.svg"
                  style={{
                    position: "relative",
                    right: "160px",
                    width: "15px",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,.5)",
                }}
              ></div>
              <img
                className="d-block w-100"
                src={
                  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5842/755842-h"
                }
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ position: "relative", height: "100vh" }}>
              <div>
                <div
                  style={{
                    position: "absolute",
                    left: "40px",
                    top: "190px",
                    zIndex: "20",
                    width: "600px",
                  }}
                >
                  <h1
                    style={{
                      color: "white",
                      fontSize: "61px",
                      fontWeight: "600",
                    }}
                  >
                    The Avengers
                  </h1>
                  <p
                    style={{
                      color: "white",
                      fontSize: "18px",
                      marginTop: "15px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button
                    onClick={() => {
                      setShowTrailer(true);
                      setSelectedMovie({ trailerKey: "hIR8Ar-Z4hw" });
                    }}
                    className=" bg-danger"
                    style={{
                      marginTop: "15px",
                      color: "white",
                      border: "50px",
                      borderRadius: "500px",
                      width: "170px",
                      height: "40px",
                      fontWeight: "700",
                    }}
                  >
                    Watch Trailer
                  </button>
                  <img
                    alt=""
                    src="/icons/circle-play-regular.svg"
                    style={{
                      position: "relative",
                      right: "160px",
                      width: "15px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,.5)",
                }}
              ></div>
              <img
                className="d-block w-100"
                src={"https://wallpaperaccess.com/full/247129.jpg"}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselNavbar;
