
export const MovieItem = ({ popularity,poster_path, original_name, first_air_date, id }) => {
    <li key={id}>
        <div >
            <img src={poster_path} alt={original_name} />
            <p>{original_name}</p>
            <p>{first_air_date}</p>
            <p>{popularity}</p>
        </div>
    </li>
}