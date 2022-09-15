import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { reviewFetch } from "services/Fetch";

export const Review = () => {
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
                {review.map(author => 
                    <li key={author.id}>
                        <p>Author: {author.author}</p>
                        <p>{author.content}</p>
                    </li>
                )}
            </ul>
        </main>
    )
}