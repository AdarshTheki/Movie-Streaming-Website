import React, { useEffect, useState } from "react";
import axios from "../Server/axios";
import requests from "../Server/Requests";
import "./banner.css";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movies);
  // Adjust to the movie description sentences
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      {/* Background Image */}
      <header
        className='banner'
        style={{
          backgroundImage: `linear-gradient(to bottom,transparent 0%, rgba(37, 37, 37, 0.41) 90%, #111),url(
            "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
          )`,
        }}>
        <div className='banner__contents'>
          {/* title */}
          <h1 className='banner__title'>
            {movies?.title || movies?.name || movies?.original_name}
          </h1>
          {/* div > 2 Button */}
          <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
          </div>
          {/* description */}
          <h2 className='banner__description'>
            {truncate(movies?.overview, 150)}
          </h2>
        </div>
      </header>
    </>
  );
};

export default Banner;
