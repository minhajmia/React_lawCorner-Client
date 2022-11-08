import React, { useContext } from "react";
import "./Register.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../Utilities/Images/Login.png";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/Context";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { signInWithGoogle, registerUser, updateUserProfile } =
    useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleSignIn = () => {
    signInWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // submit form;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        userProfileUpdated(name, photoURL);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userProfileUpdated = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile);
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label text-1xl">
                Already have an account ?
                <Link to="/login" className="text-info">
                  Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary capitalize">SignIn</button>
            </div>
            <div className="form-control">
              <button
                onClick={googleSignIn}
                className="btn btn-primary capitalize"
              >
                <FaGoogle className="mr-5" />
                Sign In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
