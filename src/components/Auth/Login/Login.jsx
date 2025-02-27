import React from "react";

function Login() {
  return (
    <form className="  text-center text-black items-center">
      <input
        id="authInput"
        type="text"
        className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-5  rounded"
        placeholder="EMAIL"
      />
      <input
        id="authInput"
        type="password"
        className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-5 rounded"
        placeholder="PASSWORD"
      />
      <br />
      <input type="checkbox" name="remember me" className="" />
      
       Remember Me
      
      <br />
      <button className=" p-2 px-20 bg-black rounded my-10 text-orange-600">Submit</button>
    </form>
  );
}

export default Login;
