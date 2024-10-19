import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { auth, onAuthStateChanged, signOut } from "../FirebaseConfig";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/home");
        // console.log(auth);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    });
  }, []);

  return (
    <div className="flex justify-around">
      <div className="text-5xl">I m Dashboard</div>
      <div>
        <button onClick={() => logOut()} className="p-2 bg-gray-800 text-white">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
