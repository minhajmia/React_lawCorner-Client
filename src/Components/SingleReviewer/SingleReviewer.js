import React from "react";

const SingleReviewer = ({ singleRev }) => {
  const { name, reviewerPhoto, reviewInfo } = singleRev;
  return (
    <div>
      <div className="stat place-items-center">
        <img
          src={reviewerPhoto}
          className="stat-value  w-14 h-14 rounded-md "
        />
        <div className="stat-title">
          <span>
            <strong>Name</strong> : {name}
          </span>
        </div>
        <div className="stat-desc">{reviewInfo}</div>
      </div>
    </div>
  );
};

export default SingleReviewer;
