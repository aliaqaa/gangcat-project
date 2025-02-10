import { React, useState } from "react";
import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
function AuthIndex() {
  const [mode, setMode] = useState("signup");
  return (
    <div className="container m-auto mt-10 forthOrange flex p-2  rounded w-7/10">
      <div id="rightside" className="">
        <img
          src="/public/Images/Posts/motor.jpg"
          alt="motor"
          className="w-82 float-end"
        />
      </div>
      <div id="rightside" className="w-full">
        <div className="flex  bg-auth-mode justify-around   rounded border-gray-200 m-2">
          <button
            className={`${
              mode === "login" ? "bg-black text-orange-600" : "text-black"
            } cursor-pointer w-1/2 py-2`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={`${
              mode === "signup" ? "bg-black text-orange-600" : " text-black"
            } cursor-pointer w-1/2 py-2`}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>
        {mode === "login"?<Login/>:<SignUp/>}
      </div>
    </div>
  );
}

export default AuthIndex;
