import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app, auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BODY_LOGO} from "../utils/constants";


const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const provider = new GoogleAuthProvider();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        // 🔥 Store user in Redux
        dispatch(
          addUser({
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidation(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;
    if (!isSignInForm) {
      //sign up Logic
    } else {
      //sign in Logic
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BODY_LOGO}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute w-3/12 m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-4xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 mx-auto my-4 w-full bg-gray-900"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          // autocomplete="current-password"
          autoComplete="email"
          placeholder="Email Id"
          className="p-2 mx-auto my-4 w-full bg-gray-900"
        ></input>

        <input
          ref={password}
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          className="p-2 mx-auto my-4 w-full bg-gray-900"
        ></input>
        <button
          className="p-4 mx-auto my-4 bg-red-700 w-full "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 ">{errorMessage}</p>
        <p className=" my-4 cursor-pointer mx-auto" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix?Sign up now."
            : "Already resgistered ! Sign In Now."}
        </p>
        <p className="mx-6">----------------or------------------</p>
        <button
          className="p-4 mx-auto my-4 bg-white text-blue-700 font-bold w-full "
          onClick={signUpWithGoogle}
        >
          Login with Google
        </button>
      </form>
    </div>
  );
};
export default Login;
