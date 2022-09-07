import { MovieItem } from "components/MovieItem/MovieItem"


export const MoviesList = ({ data,idx }) => {
    return (
        <>
            {data.map(({ popularity,original_title,poster_path, original_name, first_air_date, id }) => 
                <MovieItem key={idx}
                    poster={poster_path}
                    name={original_name || original_title}
                    date={first_air_date}
                    popularity={popularity}
                />
            )}
        </>
    )
}