import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './movies.css'

import { useParams } from "react-router-dom";
import {FaChevronDown} from "react-icons/fa"

import SideBar from "../sideBar/sideBar"

const imgURL = "http://image.tmdb.org/t/p/w500"

function Movies() {
    const movId = useParams()

    const [movies, setMovies] = useState({})

    useEffect(()=> {
        const fetchData = async () =>{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movId.id}?api_key=4bb92206f4da09e4413c0054c23a39be`);
            const moviez = await response.json();
            setMovies(moviez)
            console.log(movId.id)
            console.log(movies)
        }
        fetchData()
    }, [])
    return <div>
        <div className="wrap">

            <SideBar />

            <div className="content">
                <center>
                    <img src={imgURL + movies.backdrop_path} alt="" />
                </center>
                <div className="info">
                    <div className="title" data-testid: movie-title>
                        <h4>{movies.title}</h4><h4 data-testid: movie-release-date>{movies.release_date}</h4>
                        <h4 data-testid: movie-runtime>{movies.runtime + 'mins'}</h4>
                    </div>
                    <div className="synopsis" data-testid: movie-overview>
                        {movies.overview}
                    </div>
                    {/* <div className="cast">
                        <div className="cast-item">
                            <h4>Director:</h4>
                            <p>dgshsfssfs</p>
                        </div>
                        <div className="cast-item">
                            <h4>Stars:</h4>
                            <p></p>
                        </div>
                        <div className="cast-item">
                            <h4>Writer:</h4>
                            <p></p>
                        </div>
                    </div> */}
                    <div className="awards">
                        <button>Top Rated Movie </button>
                        Awards nominations 
                        <FaChevronDown 
                            style={{
                                marginLeft: '50px',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Movies