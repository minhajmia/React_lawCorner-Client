import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateReview = () => {
  const updateReviewInfo = useLoaderData();
  const { _id, reviewInfo, email, name, rating, reviewerPhoto, reviewId } =
    updateReviewInfo;
  const navigate = useNavigate();
  const [updateReviewService, setUpdateReviewService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${reviewId}`)
      .then((response) => response.json())
      .then((data) => {
        setUpdateReviewService(data);
      });
  }, [reviewId]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const reviewInfo = form.reviewInfo.value;
    const updateReview = { name, rating, reviewInfo };
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated successfully");
          navigate("/MyReviews");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="my-10">
      <h3 className="text-center text-3xl font-bold my-5">Edit Your Review</h3>
      <div className="flex flex-col w-2/3 mx-auto">
        <div className="grid card bg-base-300 rounded-box place-items-center">
          <div className="overflow-x-auto w-full">
            <table className="table w-full text-center">
              <thead>
                <tr>
                  <th>Your Profile</th>
                  <th>Service and Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-circle  w-14 h-14">
                          <img src={reviewerPhoto} alt="User photo" />
                        </div>
                      </div>
                      <span className="ml-5"> {email}</span>
                    </div>
                  </td>
                  <td>
                    {updateReviewService?.title}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      $ {updateReviewService?.price}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid  card rounded-box ">
          <form onSubmit={handleSubmit} className=" ">
            <label htmlFor="" className="text-left">
              Name :
            </label>
            <input
              type="text"
              placeholder="Type here"
              defaultValue={name}
              name="name"
              className="input input-bordered input-primary  w-full"
            />
            <br />
            <label htmlFor="" className="text-left">
              Rating :
            </label>
            <input
              type="number"
              placeholder="Type here"
              defaultValue={rating}
              name="rating"
              className="input input-bordered input-primary w-full my-3"
            />
            <br />
            <label htmlFor="" className="text-left">
              Review Info :
            </label>
            <input
              type="text"
              placeholder="Type here"
              defaultValue={reviewInfo}
              name="reviewInfo"
              className="input input-bordered input-primary w-full mb-5"
            />
            <input
              type="submit"
              value="Update Review"
              className="btn banner-btn"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
