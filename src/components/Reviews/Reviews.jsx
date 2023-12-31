import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/Api";
import Loader from "components/Loader/Loader";
import { List } from "./Reviews.styled";

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchReviewsFilms = async () => {
      setLoading(true);

      try {
        const resp = await fetchReviews(movieId);
        setReviews(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewsFilms();
    }, [movieId]);

    return (
        <>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <List>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </List>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}            
        </>
    )
}