import React from 'react'
import Card from "./MovieCard"

const MovieList = ({movies}) => {
    return (
        <div>
            {movies.map((el, index) => (
        <Card movie={el} key={index}/>
      ))}
        </div>
    )
}

export default MovieList

