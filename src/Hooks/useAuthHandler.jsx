import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { useLocation, useNavigate } from "react-router-dom";

const useAuthHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        if (location.pathname === "/login" || location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [dispatch, navigate, location.pathname]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => navigate("/error"));
  };

  return { handleSignOut };
};

export default useAuthHandler;
