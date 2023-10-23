import {useState, useEffect, useRef} from "react";

export const fetchMovies = async (page) => {
    const response = await fetch(`/api/movies?page=${page}`);
    const data = await response.json();
    return data?.results || [];
};

const useFetchMovies = (page) => {
    const [movies, setMovies] = useState([]);
    const dataFetchedRef = useRef(false);

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        fetchMovies(1)
            .then((response) => {
                setMovies(prevItems => [...prevItems, ...response]);
            });
    },[page]);

    useEffect(() => {
        page !== 1 && fetchMovies(page)
            .then((response) => {
                setMovies(prevItems => [...prevItems, ...response]);
            });
    }, [page]);

    return movies;
}

export default useFetchMovies;