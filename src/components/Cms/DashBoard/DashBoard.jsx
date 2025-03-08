import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import Cookies from 'js-cookie';  

axios.defaults.withCredentials = true; // Crucial for sending cookies  

function DashBoard() {  
  const [profileInfo, setProfileInfo] = useState(null);  
        const jwt = Cookies.get("jwt");  
    
  const fetchProfile = async () => {  
    try {  
      const response = await axios.get('https://ali-tousi-api.liara.run/api/users/userinfo',{
   withCredentials:true,

      });  
      setProfileInfo(response.data);  
    } catch (error) {  
      console.error('Error fetching profile:', error);  
    }  
  };  

  useEffect(() => {  
    fetchProfile();  
  }, []);  

  return (  
    <div>  
      <h1>Dashboard</h1>  
      {profileInfo ? (  
        <div>  
          <pre>{JSON.stringify(profileInfo, null, 2)}</pre>  
        </div>  
      ) : (  
        <p>Loading profile information...</p>  
      )}  
    </div>  
  );  
}  

export default DashBoard;  