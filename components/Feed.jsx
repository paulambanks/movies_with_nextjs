'use client';

import {useState, useRef, useEffect, Suspense} from "react";
import MovieCard from "./MovieCard";
import useFetchMovies from "@utils/useFetchMovies";
import Loading from "@app/loading";

const MoviesCardList = ({data, handleTagClick}) => {
    return (
        <div className="mt-16 movies_layout">
            {data && data?.map((movie) => (
                <MovieCard
                    key={movie.title}
                    movie={movie}
                    handleTagClick={handleTagClick}
                />
            ))}
            <div></div>
        </div>
    )
}

const Feed = () => {
    const [page, setPage] = useState(1);
    const movies = useFetchMovies(page);

    const handleMoreMovies = () => {
        setPage((prevState) => prevState + 1);
    };

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {}

    return (
        <section className="feed">
            <form className="relative w-1/2 flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a title"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            <Suspense fallback={<Loading />}>
                <MoviesCardList
                    data={movies}
                    handleTagClick={() => {}}
                />
            </Suspense>
            {page && (
                <button
                    type="button"
                    className="black_btn p-2 m-5"
                    onClick={handleMoreMovies}
                >
                    Load more
                </button>
            )}
        </section>
    )
}

export default Feed;