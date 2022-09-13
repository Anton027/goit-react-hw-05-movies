import { MovieItem } from "components/MovieItem/MovieItem"


export const MoviesList = ({ movies }) => {
    return (
        <>
            {movies.map(({ popularity,original_title,poster_path, original_name, first_air_date, id }) => 
                <MovieItem key={id}
                    poster_path={poster_path}
                    original_name={original_name || original_title}
                    first_air_date={first_air_date}
                    popularity={popularity}
                />
            )}
        </>
    )
}