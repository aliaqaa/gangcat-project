import axios from 'axios';  
import Cookies from 'js-cookie';  

const instance = axios.create({  
    baseURL: 'https://ali-tousi-api.liara.run/api', // Replace with your API base URL  
    timeout: 5000, // Set a timeout  
    headers: {  
        'Content-Type': 'application/json',  
        // You can add other headers here, like authorization tokens  
    },  
});  

// Request interceptor  
instance.interceptors.request.use(  
    (config) => {  
        // Add authorization token or any other request modifications here  
      /*   const token = Cookies.get('token'); // Example for getting token from cookies  
        if (token) {  
            config.headers['Authorization'] = `Bearer ${token}`;  
        }   */
        return config;  
    },  
    (error) => {  
        // Handle request error  
        return Promise.reject(error);  
    }  
);  

// Response interceptor  
instance.interceptors.response.use(  
    (response) => {  
        return response.data; // Just return the data from the response directly  
    },  
    (error) => {  
        // Handle response error  
        if (error.response) {  
            // You can customize error messages based on status codes  
            const { status, data } = error.response;  
            switch (status) {  
                case 401:  
                    // Handle unauthorized access, maybe redirect to login  
                    break;  
                case 404:  
                    // Handle not found  
                    break;  
                default:  
                    console.error(`Error: ${data.message || 'Something went wrong'}`);  
            }  
        }  
        return Promise.reject(error);  
    }  
);  

export default instance;  