import Link from "next/link";
const MovieCard = ({ movie, handleTagClick}) => {

    const {
        adult,
        backdrop_path,
        genre_ids,
        id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count
    } = movie;

    return (
        <div className="movie_card dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/movies/${id}`}>
                <img
                    alt={title}
                    style={{
                        width: '100%',  /*width of parent container*/
                        maxHeight: '300px', /*height of parent container*/
                        objectFit: 'fill',
                        position: 'relative',
                        top: '50%',
                        // transform: transl(-50%);
                    }}
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                />
            </Link>
            <div className="content p-5">
                <Link href={`/movies/${id}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{overview}</p>
                <div className="mt-auto border-t-2 border-neutral-100 text-center dark:border-neutral-600 dark:text-neutral-50">
                    <small>{release_date}</small>

                </div>
            </div>
        </div>
    )
}

export default MovieCard;