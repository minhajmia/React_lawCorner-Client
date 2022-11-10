import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import Swal from "sweetalert2";

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
      reviewId: service._id,
      rating,
      reviewInfo,
      email: user?.email || "unregistered",
    };

    fetch("https://server-side-service-review.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Successfully add a review",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div>
        <label htmlFor="my-modal-3" className="btn banner-btn capitalize">
          Write Review
        </label>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm banner-btn btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              <h2 className="text-3xl my-5 font-bold text-center">Review</h2>
              <div className="text-center">
                <form onSubmit={handleReview}>
                  <div className="form-control">
                    <label htmlFor="">Name : </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      className="input input-bordered  sm:w-full  md:w-1/2 lg:2/3 mx-auto"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label htmlFor=""> Rating : </label>
                    <input
                      type="number"
                      placeholder="Rating"
                      name="rating"
                      className="input input-bordered  sm:w-full  md:w-1/2 lg:2/3 mx-auto"
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label htmlFor="">Review info : </label>
                    <textarea
                      className="textarea textarea-bordered sm:w-full  md:w-1/2 lg:2/3 mx-auto"
                      placeholder="Review info"
                      required
                      name="reviewInfo"
                    ></textarea>
                  </div>
                  <input
                    type="Submit"
                    value="Review"
                    className="btn banner-btn my-5"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
