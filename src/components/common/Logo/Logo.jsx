import React from "react";
import { Link } from "react-router";

function Logo({ className }) {
  return (
    <Link to="/" className="flex items-center gap-0 ">
      <img
        src="/public/images/Common/Capture2-removebg-preview.png"
        alt="png"
        className="h-14 "
      />
      <img
        src="/public/images/Common/Capture1-removebg-preview.png"
        alt="png"
        className={`${className} scale-x-[-1]`}
      />
    </Link>
  );
}

export default Logo;
