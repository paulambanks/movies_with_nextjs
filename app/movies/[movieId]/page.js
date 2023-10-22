import React from "react";

// localhost:3000/movies/1

const Movie = ({ params }) => {
    const { movieId } = params;

    return (
        <div>{ movieId }</div>
    )
}

export default Movie;