import React from "react";
import { Link } from "react-router";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function AuthFooter() {
  return (
    <div className="flex justify-center gap-x-4 mt-5">
      <h1 className="text-4xl text-orange-400">
        CODE AND DESIGN BY
        <Link to="/alitousi" className="text-red-700">
          {" "}
          Ali Tousi
        </Link>
      </h1>
      <div className="flex items-center text-4xl primaryOrange text-black p-1 rounded-full gap-x-5">
        <a href="https://t.me/mrAli2c">
          <FaTelegram />
        </a>
        <a
          href="https://linkedin.com/in/Ali-Tousi77"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:ali.tousi77@gmail.com">
          <TfiEmail />
        </a>
        <a href="https://github.com/aliaqaa">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default AuthFooter;
