import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function AliTousiIndex() {
  return (
    <div className="flex flex-col container m-auto">
      <div id="topside" className="flex justify-center items-center">
        <img
          src="/public/Images/Common/Gangme.png"
          alt="alitousi"
          className=" w-72"
        />
        <div className="flex flex-col">
          <h1 className="text-orange-400 text-4xl mb-10 font-extrabold">
            Ali
            <br />
            Tousi
          </h1>
          <span className="flex gap-x-7">
            <span>
              <h2 className="text-amber-500">Web Developer</h2>
              <h2 className="text-amber-500">Code Lover</h2>
            </span>

            <img
              src="/public/Images/Icons/cat-paw-dog-clip-art-cat-1564f2df6d7564d3a69ed7a0c3e9ff40.png"
              alt="cat-paw-dog-clip-art-cat-1564f2df6d7564d3a69ed7a0c3e9ff40.png"
              className="w-14 bg-amber-400 rounded"
            />
          </span>
        </div>
      </div>
      <div className="bg-amber-600 text-black font-extrabold rounded-xl text-5xl mb-10 p-3">
        Hello, thank you for visiting my website! <br /> I’m a passionate web
        developer who thrives on turning ideas into digital reality. <br />{" "}
        Coding is not just my job it’s my creative outlet,
        <br /> and I cherish every moment of it.
        <br /> This website serves as my portfolio,<br /> showcasing the projects I’ve
        poured my heart into. <br /> Feel free to explore, and if you’d like to
        collaborate, discuss ideas, or just say hi,
        <br /> don’t hesitate to contact me!
        <div className="flex items-center justify-center text-4xl primaryOrange text-black p-1 rounded-full gap-x-5 m-auto mt-10">
          <a href="https://t.me/mrAli2c" title="telegram">
            <FaTelegram />
          </a>
          <a href="https://linkedin.com/in/Ali-Tousi77"title="linkedin">
            <FaLinkedin />
          </a>
          <a href="mailto:ali.tousi77@gmail.com" title="email">
            <TfiEmail />
          </a>
          <a href="https://github.com/aliaqaa" title="github">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AliTousiIndex;
