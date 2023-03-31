function Review({ review }) {
  return (
    <div>
      <p>{review.comment}</p>
      <p>{review.rating}</p>
    </div>
  );
}

export default Review;
