import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../requests";
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="Originais Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Filmes de Ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Filmes de Comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Filmes de Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Filmes de Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
