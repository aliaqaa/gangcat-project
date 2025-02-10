import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router";

function DefaultFooter() {
  return (
    <div className="container m-auto primaryOrange w-full flex justify-center p-5">
      <img
        src="/public/Images/Common/swag-cool.gif"
        alt="gif"
        className="w-62 m-auto "
      />
      <div className="flex flex-col m-auto">
        <h1 className="bg-black text-6xl text-orange-600 my-10 p-3 rounded">CODE AND DESIGN BY</h1>
        <Link className="bg-black text-6xl text-red-600 p-3 rounded" to="/alitousi">
          Ali Tousi
        </Link>
        <div className="flex items-center text-4xl primaryOrange text-black p-1 rounded-full gap-x-5 m-auto mt-10">
          <a href="https://t.me/mrAli2c">
            <FaTelegram />
          </a>
          <a href="https://linkedin.com/in/Ali-Tousi77">
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
    </div>
  );
}

export default DefaultFooter;
