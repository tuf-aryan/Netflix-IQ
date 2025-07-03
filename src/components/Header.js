import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LANG_SUPPORTED, LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();

  const auth = getAuth();

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // 🔁 Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const gptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  return (
    <div className="px-8 w-full py-4 absolute z-10 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between  ">
      <img className="w-36 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex justify-evenly">
          {showGptSearch && (
            <select
              className="bg-purple-950 p-1 h-12 mt-2 text-white font-bold  rounded-lg"
              onChange={handleLanguageChange}
            >
              {LANG_SUPPORTED.map((lang) => (
                <option key={lang.identifier} value={lang?.identifier}>
                  {lang?.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="m-2 text-white p-2  md:font-bold t bg-purple-950 rounded-lg"
            onClick={gptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          <h1 className="md:m-2 m-1 mt-2 p-1  flex items-center md:p-2 text-white md:font-bold bg-purple-950 rounded-lg">
            {user?.name}
          </h1>
          <button
            className="bg-purple-950 md:font-bold  w-24 h-12 mt-2 rounded-lg p-2 text-white"
            onClick={handleClick}
          >
            Sign-out
          </button>
          
        </div>
      )}
    </div>
  );
};

export default Header;
