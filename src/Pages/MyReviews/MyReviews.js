import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [user?.email]);
  return (
    <div>
      <h3>Review</h3>
    </div>
  );
};

export default MyReviews;
