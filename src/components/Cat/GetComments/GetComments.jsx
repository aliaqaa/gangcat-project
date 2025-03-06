import React, { useEffect, useState } from 'react';  
import axios from 'axios';
const GetComments = ({ catId }) => {  
  const [comments, setComments] = useState([]); // Corrected useState initialization
  const [error, setError] = useState(null); // Optional: for error handling
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://ali-tousi-api.liara.run/api/cats/${catId}/comments`);
        setComments(response.data); // Assuming the response has a 'comments' field
 
      } catch (err) {
        setError(err.message || 'Error fetching comments'); // Handle errors
      }
    };
    fetchComments();
  }, [catId]); // Dependency array: fetch comments when catId changes
  if (error) {
    return <p className="text-red-500">{error}</p>; // Display error message
  }
  return (  
    <ul className="comments-list">
            {comments.map((comment) => (
                <li key={comment._id} className='bg-amber-400 text-black flex '>
                  <img src={comment.img} alt={comment.img} className='w-20 rounded-full'/>
                    <strong>{comment.email}:</strong>: <br /> {comment.text}
                </li>
            ))}
        </ul>
  );  
};  
export default GetComments;