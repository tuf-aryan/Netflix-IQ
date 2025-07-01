import React from "react";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="px-8 w-full py-4 absolute z-10 bg-gradient-to-b from-black flex justify-between ">
      <img
        className="w-36"
        src="
https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex">
          <img
            className="w-8 m-4"
            alt="usericon"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          ></img>
          <h1 className="m-2 p-2 text-white font-bold">{user?.name}</h1>
          <button
            className="bg-red-600 bg-gradient-to-b to-black w-24 h-16 p-3 text-white"
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
