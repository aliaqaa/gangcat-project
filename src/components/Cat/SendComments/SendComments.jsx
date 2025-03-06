import axios from 'axios';  
import React, { useState } from 'react';  
import { useSelector } from 'react-redux';  

const SendComments = ({ catId }) => {  
  const [commentText, setCommentText] = useState(''); // Initialize as an empty string  
  const [error, setError] = useState(null); // For error handling  
  const userId = useSelector((state) => state.user.profile.userId); // Assuming profile contains user ID  

  const handleSubmit = async (e) => {  
    e.preventDefault();  

    const fetchComments = async () => {  
      try {  
        const response = await axios.post(`https://ali-tousi-api.liara.run/api/cats/${catId}/comments`, {  
          userId: userId ? userId.id : null, // Replace userId with appropriate field if needed  
          text: commentText,  
        });  

        // Optionally: Do something with the response  
        console.log('Comment submitted:', response.data);  

        // Reset the comment text after submitting  
        setCommentText('');  

      } catch (err) {  
        setError(err.message || 'Error submitting comment'); // Handle errors  
      }  
    };  

    await fetchComments(); // Call the fetchComments function  
  };  

  return (  
    <form onSubmit={handleSubmit} className="send-comment-form my-5">  
      <textarea  
        value={commentText}  
        onChange={(e) => setCommentText(e.target.value)}  
        placeholder="Add a comment"  
        className="w-full p-2 border rounded"  
      />  
      {error && <p className="text-red-500">{error}</p>} {/* Display error if exists */}  
      <button type="submit" className="bg-orange-500 text-white p-2 rounded">  
        Submit Comment  
      </button>  
    </form>  
  );  
};  

export default SendComments;  