import React, {useEffect, useState} from "react";
import './card.css'

import { FaGreaterThan } from "react-icons/fa";

import Content from "../content/content.jsx";

function Card() {

const MOVIEBOX = "https://api.themoviedb.org/3/movie/top_rated?api_key=4bb92206f4da09e4413c0054c23a39be";
const IMG = "https://api.themoviedb.org/3/movie/{movie_id}/images";

 
 const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(MOVIEBOX)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results);
        })
    }, [])

    return <div>
        <div className="cards">
            <div className="top">
                <h3>Featured Movie</h3>
                <div className="more">See more &nbsp; 
                    <FaGreaterThan 
                        style={{
                            paddingTop: '5px'
                        }}
                    />
                </div>
            </div>
            <div className="movie">
                
                {
                    movies.slice(0, 10).map((movie)=> {
                       return <Content key={movie.id} {...movie}/>
                    })
                }

            </div>
        </div>
    </div>
};

export default Card;