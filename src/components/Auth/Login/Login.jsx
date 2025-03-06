import React, { useState } from "react";  
import axios from 'axios'; 
import { useNavigate } from "react-router"; 
import Cookies from 'js-cookie'; // Make sure to install js-cookie
import { useDispatch } from "react-redux";
import { setUserProfile, clearUserProfile } from '../../../Slice/userSlice'; 
function Login() {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const [errorMessage, setErrorMessage] = useState('');  
  const [successMessage, setSuccessMessage] = useState('');  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {  
    e.preventDefault();  
    try {  
      const response = await axios.post('https://ali-tousi-api.liara.run/api/auth/login', {  
        email,  
        password,  
      });  
      
      if (response.status === 200) {  
        setSuccessMessage('Login successful!');
        Cookies.set('jwt', response.data.token, { expires: 1 }); // Set cookie with 1 day expiration
        Cookies.set('UserId',   response.data.userId );
        Cookies.set('UserEmail', response.data.email );
        navigate("/landing");  
        setErrorMessage('');  
      }  
    } catch (error) {  
      if (error.response) {  
        setErrorMessage(error.response.data.message || 'Login failed');  
      } else {  
        setErrorMessage('No server response. Please try again later.');  
      }  
      setSuccessMessage('');  
    }  
  };  
  return (  
    <form onSubmit={handleSubmit} className="text-center text-black items-center">  
      <input  
        id="authInput"  
        type="email"  // Changed to email type for better validation
        className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-5 rounded"  
        placeholder="EMAIL"  
        value={email}  
        onChange={(e) => setEmail(e.target.value)}  
        required  
      />  
      <input  
        id="authInput"  
        type="password"  
        className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-5 rounded"  
        placeholder="PASSWORD"  
        value={password}  
        onChange={(e) => setPassword(e.target.value)}  
        required  
      />  
      <br />  
      <label>  
        <input type="checkbox" name="remember" className="" />  
        Remember Me  
      </label>  
      <br />  
      {errorMessage && <p className="text-red-500 bg-black">{errorMessage}</p>}  
      {successMessage && <p className="text-green-500 bg-black">{successMessage}</p>}  
      <button type="submit" className="p-2 px-20 bg-black rounded my-10 text-orange-600">Submit</button>  
    </form>  
  );  
}  
export default Login;