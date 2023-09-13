import React from "react";
import './heading.css'

import { FaPlay, FaSearch, FaBars, FaTv } from "react-icons/fa";

function Heading() {
    return <div>
        <div className="head" style={{
            

            }}>
            <nav>
                <div className="logo"><FaTv style={{
                            width: '24px',
                            height: '24px',
                            padding: '5px',
                            backgroundColor: 'red',
                            borderRadius: '50%'
                        }} /> &nbsp; &nbsp;
                <h3>MovieBox</h3>
                </div>
                <div className="search">
                    <form action="">
                        <input type="text" placeholder="What do you want to watch?" />
                        <FaSearch />
                    </form>
                </div>
                <div className="signin">
                    <h4>Signin &nbsp; &nbsp;
                        <FaBars style={{
                            width: '24px',
                            height: '24px',
                            padding: '5px',
                            backgroundColor: 'red',
                            borderRadius: '50%'
                        }} />
                    </h4>
                </div>
            </nav>
            <div className="details">
                <div className="movie-title">
                    <h1>John Wick 3: Parabellum</h1>
                </div>
                <div className="movie-synopsis">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Optio, porro quaerat rem praesentium quos hic facilis sint 
                    assumenda doloremque autem nulla repellendus asperiores 
                    laboriosam vero culpa aliquam explicabo perspiciatis pariatur.
                </div>
                <div className="movie-rating">
                    <div className="imdb">
                        <img src="imdb.jpg" alt="imdb" /> 95/100
                    </div>
                    <div className="rotten">
                        <img src="tomato.jpg" alt="imdb" /> 97%
                    </div>
                </div>
                <button className="movie-trailer"><FaPlay /> &nbsp; Watch Trailer</button>
            </div>
        </div>
    </div>
}

export default Heading