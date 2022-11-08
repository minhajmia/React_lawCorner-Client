import React from "react";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const servicePrice = form.servicePrice.value;
    const servicePhotoUrl = form.servicePhotoUrl.value;
    const serviceRatings = form.serviceRatings.value;
    const serviceDescription = form.serviceDescription.value;
    console.log(
      serviceName,
      servicePrice,
      servicePhotoUrl,
      serviceRatings,
      serviceDescription
    );
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
