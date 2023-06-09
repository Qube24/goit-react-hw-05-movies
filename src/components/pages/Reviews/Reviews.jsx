import { fetchReviews } from 'components/fetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './reviewsStyle.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);

  const showReview = async id => {
    const reviews = await fetchReviews(id);
    setReview(reviews);
  };

  useEffect(() => {
    showReview(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!review) {
    return 'Loading';
  }

  return (
    <ul className={css.reviewList}>
      {review.results.map(el => (
        <li key={el.id} className={css.reviewCard}>
          {el.author}
          <p
            dangerouslySetInnerHTML={{ __html: el.content }}
            className={css.review}
          ></p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
