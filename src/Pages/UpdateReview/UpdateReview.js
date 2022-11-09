import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const updateReviewInfo = useLoaderData();
  const {
    serviceTitle,
    reviewInfo,
    email,
    servicePrice,
    name,
    rating,
    reviewerPhoto,
  } = updateReviewInfo;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const reviewInfo = form.reviewInfo.value;
    console.log(name, rating, reviewInfo);
  };
  return (
    <div>
      <h3 className="text-center text-4xl font-bold my-5">Edit Your Review</h3>
      <div className="flex flex-col w-1/2 mx-auto">
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
                        <div className="mask mask-heart w-12 h-12">
                          <img src={reviewerPhoto} alt="User photo" />
                        </div>
                      </div>
                      <span className="ml-5"> {email}</span>
                    </div>
                  </td>
                  <td>
                    {serviceTitle}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      $ {servicePrice}
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
            <input type="submit" value="Update Review" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;