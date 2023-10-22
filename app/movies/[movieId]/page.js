import React from "react";
import {GET} from "@app/api/movies/[movieId]/route";

// localhost:3000/movies/1

async function Movie ({ params }) {
    const { movieId } = params;

    return (
        <div>This is the movie: { movieId }</div>
    )
}

export default Movie;