import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; // Ensure you have this installed
import { useNavigate } from 'react-router'; // Import useNavigate
function SignUp() {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  // Use navigate hook
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    // Basic validation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('https://ali-tousi-api.liara.run/api/auth/register', {
        email,
        password,
      });
      // On successful registration
      if (response.status === 201) {
        setSuccessMessage('User registered successfully!');
        // Attempt to log in immediately after registration
        const loginResponse = await axios.post('https://ali-tousi-api.liara.run/api/auth/login', {
          email,
          password,
        });
        if (loginResponse.status === 200) {
          setSuccessMessage('Login successful!');
          Cookies.set('jwt', loginResponse.data.token); // Correct way to set cookie
          navigate("/landing"); // Use navigate to redirect
        }
        // Clear input fields after successful registration
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorMessage('');
      }
    } catch (error) {
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 200 range
        setErrorMessage(error.response.data.message || 'An error occurred');
      } else {
        // Network or other errors
        setErrorMessage('No server response. Please try again later.');
      }
      setSuccessMessage('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="text-center text-black">
      <input
        id="authInput"
        type="text"
        className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-5 rounded"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        id="authInput"
        type="password"
        className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-1 rounded"
        placeholder="PASSWORD"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        id="authInput"
        type="password"
        className="bg-black bg-auth-mode p-5 w-4/5 placeholder-black text-black my-1 rounded"
        placeholder="CONFIRM PASSWORD"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <br />
      {errorMessage && <p className="text-red-500 bg-black p-2">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 bg-black">{successMessage}</p>}
      <button type="submit" className="p-2 px-20 bg-black rounded my-10 text-orange-600">Submit</button>
    </form>
  );
}
export default SignUp;