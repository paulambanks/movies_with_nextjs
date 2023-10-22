'use client';

import {useState, Suspense} from "react";
import MovieCard from "./MovieCard";
import useMoviesList from "@utils/useMoviesList";

const MoviesCardList = ({data, handleTagClick}) => {
    return (
        <div className="mt-16 movies_layout">
            {data && data?.map((movie) => (
                <MovieCard
                    movie={movie}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const movies = useMoviesList();
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {

    }

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a title"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            <Suspense fallback={<div>Loading.....</div>}>
                <MoviesCardList
                    data={movies.results}
                    handleTagClick={() => {}}
                />
            </Suspense>
        </section>
    )
}

export default Feed;