import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const Review = ({ service }) => {
  const { user } = useContext(AuthContext);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const reviewInfo = form.reviewInfo.value;

    const review = {
      name,
      reviewerPhoto: user?.photoURL,
      serviceImg: service?.img,
      serviceTitle: service?.title,
      servicePrice: service?.price,
      reviewId: service?._id,
      rating,
      reviewInfo,
      email: user?.email || "unregistered",
    };

    console.log(review.reviewId);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review Successfully !");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2 className="text-4xl my-5 font-bold text-center">Review</h2>
      <div className="text-center">
        <form onSubmit={handleReview}>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="input input-bordered input-accent w-1/3"
            required
          />
          <br />
          <label htmlFor=""> Rating : </label>
          <input
            type="number"
            placeholder="Rating"
            name="rating"
            className="input input-bordered input-accent w-1/3"
            required
          />
          <br />
          <label htmlFor="">Review info : </label>
          <textarea
            className="textarea textarea-accent w-1/3"
            placeholder="Review info"
            required
            name="reviewInfo"
          ></textarea>
          <input type="Submit" value="Review" className="btn " />
        </form>
      </div>
    </div>
  );
};

export default Review;
