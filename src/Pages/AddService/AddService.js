import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const { user } = useContext(AuthContext);
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

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Service Added Successfully !");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2 className="text-4xl my-5 font-bold text-center">Add service</h2>
      <div className="text-center">
        <form onSubmit={handleAddService}>
          <label htmlFor="">Service Name : </label>
          <input
            type="text"
            placeholder="Service Name"
            name="serviceName"
            className="input input-bordered input-accent w-1/3"
          />
          <br />
          <label htmlFor="">Service Photo URL : </label>
          <input
            type="text"
            placeholder="Service Photo URL"
            name="servicePhotoUrl"
            className="input input-bordered input-accent w-1/3"
          />
          <br />
          <label htmlFor="">Service Price : </label>
          <input
            type="number"
            placeholder="Service Price"
            name="servicePrice"
            className="input input-bordered input-accent w-1/3"
          />
          <br />
          <label htmlFor="">Service Ratings : </label>
          <input
            type="number"
            placeholder="Service Ratings"
            name="serviceRatings"
            className="input input-bordered input-accent w-1/3"
          />
          <br />
          <label htmlFor="">Service Description : </label>
          <textarea
            className="textarea textarea-accent w-1/3"
            placeholder="Service Description"
            name="serviceDescription"
          ></textarea>
          <input type="Submit" value="Add Service" className="btn " />
        </form>
      </div>
    </div>
  );
};

export default AddService;
