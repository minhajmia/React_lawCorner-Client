import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  useTitle("Add Service");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.serviceName.value;
    const price = form.servicePrice.value;
    const img = form.servicePhotoUrl.value;
    const rating = form.serviceRatings.value;
    const description = form.serviceDescription.value;
    const service = {
      title,
      price,
      rating,
      description,
      img,
    };

    fetch("https://server-side-service-review.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Service added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/services");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className=" my-10 mx-auto">
      <h2 className="text-3xl my-5 font-bold text-center">Add service</h2>
      <div className="text-center">
        <form onSubmit={handleAddService}>
          <div className="form-control">
            <label htmlFor="">Service Name : </label>
            <input
              type="text"
              placeholder="Service Name"
              name="serviceName"
              className="input input-bordered   sm:w-full md:w-1/3 mx-auto"
              required
            />
          </div>
          <br />
          <div className="form-control">
            <label htmlFor="">Service Photo URL : </label>
            <input
              type="text"
              placeholder="Service Photo URL"
              name="servicePhotoUrl"
              className="input input-bordered  sm:w-full md:w-1/3 mx-auto"
              required
            />
          </div>
          <div className="form-control">
            <br />
            <label htmlFor="">Service Price : </label>
            <input
              type="number"
              placeholder="Service Price"
              name="servicePrice"
              className="input input-bordered  sm:w-full md:w-1/3 mx-auto"
              required
            />
          </div>
          <br />
          <div className="form-control">
            <label htmlFor="">Service Ratings : </label>
            <input
              type="number"
              placeholder="Service Ratings"
              name="serviceRatings"
              className="input input-bordered  sm:w-full md:w-1/3 mx-auto"
              required
            />
          </div>
          <br />
          <div className="form-control">
            <label htmlFor="">Service Description : </label>
            <textarea
              className="textarea  textarea-bordered  sm:w-full md:w-1/3 mx-auto mb-5"
              placeholder="Service Description"
              name="serviceDescription"
              required
            ></textarea>
          </div>
          <input type="Submit" value="Add Service" className="btn banner-btn" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
