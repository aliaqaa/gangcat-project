import React from 'react'

function SignUp() {
  return (
    <form className="  text-center text-black">
    <input
      id="authInput"
      type="text"
      className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-5  rounded"
      placeholder="EMAIL"
    />
    <input
      id="authInput"
      type="password"
      className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-1 rounded"
      placeholder="PASSWORD"
    />
    <input
      id="authInput"
      type="password"
      className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-1 rounded"
      placeholder="CONFIRM PASSWORD"
    />
    <br />
    
    <button className=" p-2 px-20 bg-black rounded my-10 text-orange-600">Submit</button>
  </form>
  )
}

export default SignUp