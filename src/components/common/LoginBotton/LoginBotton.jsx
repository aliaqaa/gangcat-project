import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router";
import { FaUser } from "react-icons/fa";

function LoginBotton({ className }) {
  const jwtToken = Cookies.get("token");
  return (
    <>
      {jwtToken ? (
        <Link
          to="/cms"
          className={`bg-black text-orange-500  rounded-3xl items-center text-center content-center px-8 m-4
        ${className}`}
        >
          <FaUser />
        </Link>
      ) : (
        <Link
          to="/auth"
          className={`bg-black text-orange-500  rounded-3xl items-center text-center content-center px-8 m-4
            ${className}`}
        >
          Login
        </Link>
      )}
    </>
  );
}

export default LoginBotton;
