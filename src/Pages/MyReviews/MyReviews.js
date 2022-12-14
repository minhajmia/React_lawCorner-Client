import React, { useContext, useEffect, useState } from "react";
import UserReviewList from "../../Components/UserReviewList/UserReviewList";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";

const MyReviews = () => {
  useTitle("MyReviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(
      `https://server-side-service-review.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoader(false);
      });
  }, [user?.email]);

  /// delete review
  const handleDeleteReview = (_id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://server-side-service-review.vercel.app/reviews/${_id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Delete Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            const remaining = reviews.filter(
              (singleReview) => singleReview._id !== _id
            );
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <>
      <div className="overflow-x-auto w-full min-h-screen">
        <table className="table w-full text-center">
          {reviews.length === 0 ? (
            <>
              <h2 className="text-4xl min-h-screen mt-10">
                No reviews were added
              </h2>
            </>
          ) : (
            <>
              <thead>
                <tr>
                  <th> Profile</th>
                  <th>Service Name Price</th>
                  <th>Ratings</th>
                  <th>Review </th>
                  <th>
                    <label>Action</label>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {reviews?.map((review) => (
                  <UserReviewList
                    review={review}
                    key={review._id}
                    handleDeleteReview={handleDeleteReview}
                  />
                ))}
                {loader && (
                  <p className="text-orange-500 text-3xl mt-10">Loading....</p>
                )}
              </tbody>
            </>
          )}
        </table>
      </div>
    </>
  );
};

export default MyReviews;
