import React from "react";
import img from "../../Utilities/Images/notFound.png";

const NotFound = () => {
  return (
    <div>
      <img src={img} alt="" className="h-80 mt-10 block mx-auto" />
      <h2 className="text-orange-600 text-center text-3xl mb-10">
        Sorry, Page Not Found
      </h2>
    </div>
  );
};

export default NotFound;
