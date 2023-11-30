import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import google from "/google.png";

const Login = () => {
  const { signIn, signInWithGoogle, setUser } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch(console.error);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.floating_email?.value;
    const password = form.floating_password?.value;
    setError("");

    if (password.length < 6) {
      setError("Password Must Be 6 Characters Or Longer");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container mx-auto px-2 lg:px-0 pt-10 mb-10">
      <form
        onSubmit={handleLogin}
        className="bg-slate-100 p-6 lg:p-10  border-2 rounded-2xl w-full lg:w-2/5 mx-auto mt-16 shadow-2xl">
        <h1 className="text-2xl md:text-2xl font-bold leading-tight mb-8 text-center text-black ">
          Log in to your Account
        </h1>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            ref={emailRef}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          > Email Address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          <p className="text-red-600 py-4 font-semibold">{error}</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>

          <div>
            <Link to="/forgot-password" className="underline text-purple-500">
              Forgot Password?
            </Link>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 focus:outline-none font-medium rounded-lg text-2xl w-full block py-2.5"
          >
            Login
          </button>
          <div className="mt-4 text-black">
            <p>
              Don’t have an account?
              <Link to="/register" className="underline ml-2 text-purple-500">
                Create an Account
              </Link>
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-full h-100">
            <div className="flex gap-2 items-center">
              <hr className="my-9 border-gray-300 w-1/2" />
              <p>Or</p>
              <hr className="my-9 border-gray-300 w-1/2" />
            </div>
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="w-full mb-5 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center">
                <img className="w-[25px]" src={google} alt="" />
                <span className="ml-4 text-center">Continue with Google</span>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
