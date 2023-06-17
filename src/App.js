import React from "react";
import requests from "./Server/Requests.js";
import Nav from "./Components/Nav.js";
import Banner from "./Components/Banner.js";
import Row from "./Components/Row.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <Nav/>
      {/* Banner */}
      <Banner />
      {/* Rows of the Shows*/}
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
        isLargeRow={true}
      />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
      />
    </div>
  );
}
export default App;
