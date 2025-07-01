import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();

  const auth = getAuth();

  const user = useSelector((store)=>store.user);

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
        dispatch(removeUser())
      
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="px-8 w-full py-4 absolute z-10 bg-gradient-to-b from-black flex justify-between ">
      <img
        className="w-36"
        src={LOGO}
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
