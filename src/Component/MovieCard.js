import React from 'react'
import Rate from "./Rate";
import {Link} from "react-router-dom"; 
import "./CardStyle.css";
 const Card = ({movie})=>{
    return (
        <div className="container">
      <div className="movie">
        <div className="movie-rating">
          <Rate rating={movie.star} /> 
        </div>
        <div className="movie-img">
          <img src={movie.img} alt="movie poster" />
        </div>
        <div className="text-movie-cont">
          <div className="mr-grid">
            <div className="col1">
              <h2>{movie.name}</h2>
              <ul className="movie-gen">
                <p>{movie.year}</p>
              </ul>
            </div>
          </div>
          <div className="mr-grid summary-row">
            <h5>SUMMARY</h5>
            <p>{movie.description}</p>
          </div>
          <Link to={`/trailer/${movie.name}`}>link</Link>
        </div>
      </div>
    </div>
  );
};
export default Card;