import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connect from "./route";
import Movies from "../components/movies/movies";

import Heading from "../components/heading/heading"
import Card from "../components/card/card"
import Footer from "../components/footer/footer"


const MOVIEBOX = "https://api.themoviedb.org/3/movie/top_rated.desc&api_key=4bb92206f4da09e4413c0054c23a39be=";
const IMG = "https://api.themoviedb.org/3/movie/{movie_id}/images";

ReactDOM.render( 
  <div>
    {/* 
    <Movies /> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Connect/>}/>
      <Route path='/movie/:id' element={<Movies/>}/>

      
    </Routes>
    </BrowserRouter>
  </div>, document.getElementById('root')
);