import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NowPlaying from "./components/NowPlaying";
import PopularMovie from "./components/PopularMovie";
import PopularTV from "./components/PopularTV";
import PageNotFound from "./components/PageNotFound";
import { MovieDetails } from "./components/MovieDetails";
import useParams from "react-router-dom";

export const App = () => {
  return (
    <div className="App bg-sky-900 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<NowPlaying />} />
        <Route path="movies/popular" element={<PopularMovie />} />
        <Route path="moviedetails/:id" element={<MovieDetails />} />
        <Route path="tv/popular" element={<PopularTV />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
