import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HotelDetail() {
  const [hotel, setHotel] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => setHotel(data))
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/reviews?hotel_id=${id}`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, [id]);

  function handleDeleteReview(id) {
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        setReviews(reviews.filter((review) => review.id !== id));
      })
      .catch((error) => console.error(error));
  }

  function handleAddReview(review) {
    fetch('http://localhost:3000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        review: {
          comment: review.comment,
          rating: review.rating,
          user_id: review.user_id,
          hotel_id: id,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews([...reviews, data]);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      {hotel ? (
        <div>
          <h1>{hotel.name}</h1>
          <p>{hotel.location}</p>
          <p>{hotel.description}</p>
          <p>{hotel.price_range}</p>
          <p>{hotel.rating}</p>
          <img src={hotel.image_url} alt={hotel.name} />
        </div>
      ) : (
        <p>Loading hotel...</p>
      )}
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.comment}</p>
          <p>Rating: {review.rating}</p>
          <button onClick={() => handleDeleteReview(review.id)}>Delete Review</button>
        </div>
      ))}
      <h2>Add Review</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const comment = e.target.comment.value;
          const rating = e.target.rating.value;
          const user_id = 3; // Replace with the user's id
          handleAddReview({ comment, rating, user_id });
          e.target.reset();
        }}
      >
        <label>
          Comment:
          <input type="text" name="comment" required />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" min="1" max="5" required />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default HotelDetail;
