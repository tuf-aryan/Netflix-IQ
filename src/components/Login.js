import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
          alt="logo"
        />
      </div>
      <form className="p-12 bg-black absolute w-3/12 m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-4xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
          {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 mx-auto my-4 w-full bg-gray-900"
        ></input>}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-2 mx-auto my-4 w-full bg-gray-900"
        ></input>
      
        <input
          type="password"
          placeholder="Password"
          className="p-2 mx-auto my-4 w-full bg-gray-900"
        ></input>
        <button className="p-4 mx-auto my-6 bg-red-700 w-full ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 my-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix?Sign up now."
            : "Already resgistered ! Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
