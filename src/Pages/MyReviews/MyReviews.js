import React, { useContext, useEffect, useState } from "react";
import UserReviewList from "../../Components/UserReviewList/UserReviewList";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const MyReviews = () => {
  useTitle("MyReviews");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoader(false);
      })
      .catch((error) => console.log(error));
  }, [user?.email]);

  /// delete review
  const handleDeleteReview = (_id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${_id}`, {
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
      <div className="overflow-x-auto w-full">
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
              <tbody>
                {reviews.map((review) => (
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
