import React, { useState, useEffect } from 'react';  
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {  
    const [isVisible, setIsVisible] = useState(false);  

    useEffect(() => {  
        const handleScroll = () => {  
            if (window.scrollY > 200) {  
                setIsVisible(true);  
            } else {  
                setIsVisible(false);  
            }  
        };  

        window.addEventListener('scroll', handleScroll);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);  

    const scrollToTop = () => {  
        window.scrollTo({  
            top: 0,  
            behavior: 'smooth'  
        });  
    };  

    return (  
        <button  
            onClick={scrollToTop}  
            className={`fixed bottom-5 right-5 z-50 text-white rounded  gototopbutton p-4 shadow-lg transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}  
            style={{ display: isVisible ? 'block' : 'none' }}  
        >  
        <FaArrowUp className='text-[#FF3300]'/>

        </button>  
    );  
};  

export default GoToTopButton;