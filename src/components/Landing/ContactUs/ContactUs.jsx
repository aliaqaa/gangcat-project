import React from "react";

function ContactUs() {
  return (
    <>
          <h1 className="text-8xl uppercase mb-42 text-orange-600">CONTACT US</h1>

    <div className="container flex justify-center m-auto my-20">
      <div id="leftside w-1/2">
        <img
          src="/public/Images/Posts/c12b1e1e3cf71b666064e94d08339c82.jpg"
          alt="princess"
          className="w-72 "
          />
      </div>
      <div id="rightside">
        <form action="">
          <input
            id="authInput"
            type="text"
            className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-5  rounded "
            placeholder="NAME"
            />
          <input
            id="authInput"
            type="text"
            className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-5  rounded"
            placeholder="EMAIL"
          />
          <textarea
            name=""
            id="authInput"
            className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-5  rounded"
            placeholder="PASSAGE"
            rows="5"
          ></textarea>
          <button className=" p-2 px-20 bg-orange-400 rounded my-5 text-red-600">
            Submit
          </button>
        </form>
      </div>
    </div>
            </>
  );
}

export default ContactUs;
