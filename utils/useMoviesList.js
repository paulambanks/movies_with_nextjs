import { useState, useEffect } from "react";

const useMoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`/api/movies`);
            const data = await response.json();

            setMovies(data);
        }
        fetchMovies();

    },[]);

    return movies;
}

export default useMoviesList;