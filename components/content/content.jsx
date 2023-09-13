import React from "react";
import { useState } from "react";

import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const imgURL = "http://image.tmdb.org/t/p/w500"


function Content({title, poster_path, vote_average, release_date, id}) {

    const [favourite, setFavourite] = useState(false);


    return <div>
         <div className="movie-item" data-testid: movie-card>
            <div className="movie-poster">
                <img src= {imgURL + poster_path} alt="poster" data-testid: movie-poster />
                {!favourite ? (
                        <FaHeart 
                            style={{
                                color: "white",
                                position: "absolute",
                                zIndex: "1",
                                marginTop: "20px",
                                width: "24px",
                                height: "24px",
                                marginLeft: "-40px",
                                cursor: "pointer"
                            }}
                            onClick= {() => setFavourite(true)}
                        />
                    ) : (
                        <FaHeart 
                            style={{
                                color: "red",
                                position: "absolute",
                                zIndex: "1",
                                marginTop: "20px",
                                width: "24px",
                                height: "24px",
                                marginLeft: "-40px",
                                cursor: "pointer"
                            }}
                            onClick= {() => setFavourite(false)}
                        />
                    )}
            
            </div>
            <Link to={`/movie/${id}`}>
            
            <div className="movie-country-date">
                {/* <div className="country"></div> */}
                <div className="movie-release-date" data-testid: movie-release-date>{release_date}</div>
            </div>
                <h4 data-testid: movie-title>{title}</h4>
                <div className="rating">
                    <div className="imdb">
                        <img src="components/card/imdb.jpg" alt="imdb" /> <div>{vote_average}</div>
                    </div>
                    <div className="rotten">
                            <img src="components/card/tomato.jpg" alt="imdb" /> <div>{vote_average}</div>
                    </div>
                </div>
                <div className="genre"></div>
            </Link>
        </div>
    </div>
}

export default Content