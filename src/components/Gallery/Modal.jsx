import React from 'react';  

const Modal = ({ isOpen, onClose, imgUrl }) => {  
    if (!isOpen) return null;  

    return (  
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">  
            <button className="absolute top-5 right-5 text-white" onClick={onClose}>  
                Close  
            </button>  
            <img src={imgUrl} alt="Enlarged view" className="max-w-full max-h-full" />  
        </div>  
    );  
};  

export default Modal;  