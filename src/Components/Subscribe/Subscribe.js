import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="text-center my-24">
      <div>
        <h3 className="text-3xl font-bold">
          Get helpful tips and info from My newsletter!
        </h3>
      </div>
      <div className="mt-10">
        <input
          type="text"
          placeholder="abc123@gmail.com"
          className="file-input w-full max-w-xs subscribe-input"
        />
        <button className="btn btn-active banner-btn rounded-none">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
