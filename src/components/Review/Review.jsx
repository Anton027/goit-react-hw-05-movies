import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { reviewFetch } from "services/Fetch";

const Review = () => {
    const [review, setReview] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        reviewFetch(movieId).then(data => {
            setReview(data.results)
        })
    }, [movieId])
    
    return (
        <main>
            <ul>
                {review && review.length > 0 ? 
                    (review.map(author => 
                    <li key={author.id}>
                        <p>Author: {author.author}</p>
                        <p>{author.content}</p>
                    </li>)) : (<p> No review</p>)}
            </ul>
        </main>
    )
}

export default Review;