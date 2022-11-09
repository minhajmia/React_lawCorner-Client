import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../Utilities/Images/Login.png";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/Context";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const { loginWithGoogle, loginUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleLogin = () => {
    loginWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // user login
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero my-10 block">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={img} alt="" className="sm:max-w-xs md:max-w-md" />
        </div>
        <div className="card max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
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
                Don't have an account ?
                <Link to="/register" className="text-orange-400">
                  SignIn
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn banner-btn capitalize">Login</button>
            </div>
            <div className="form-control ">
              <button
                onClick={googleLogin}
                className="btn banner-btn  capitalize"
              >
                <FaGoogle className="mr-5" />
                Login With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
