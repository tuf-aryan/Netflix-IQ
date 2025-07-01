import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from 'react'
const Body = () => {
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
      } else {
        dispatch(removeUser());
      }
    });

    // 🔁 Clean up the listener on unmount
    return () => unsubscribe();
  }, [dispatch]);

  
const approuter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },{
        path:"/browse",
        element:<Browse/>
    }
])
  return (
    <div>
       <RouterProvider router={approuter}/> 

    </div>
  )
}

export default Body