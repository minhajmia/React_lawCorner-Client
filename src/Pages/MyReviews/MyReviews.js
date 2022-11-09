import React, { useContext, useEffect, useState } from "react";
import UserReviewList from "../../Components/UserReviewList/UserReviewList";
import { AuthContext } from "../../Context/Context";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, [user?.email]);
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
                  <th>User Info</th>
                  <th>Services</th>
                  <th>Ratings</th>
                  <th>Review info</th>
                  <th>
                    <label>Action</label>
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <UserReviewList review={review} key={review._id} />
                ))}
              </tbody>
            </>
          )}
        </table>
      </div>
    </>
  );
};

export default MyReviews;
