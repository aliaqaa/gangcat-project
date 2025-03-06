import React, {  useState } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import Modal from '../Modal/Modal';
function ShopButton() {
    const [isOpen, setOpen] = useState(false);  
    const openModal = () => {  
        setOpen(true);  
    };  
    const closeModal = () => {  
        setOpen(false); 
        
    };
    return (
        <span className="items-center text-center my-auto max-lg:hidden"  >
            <FaShoppingBag className="text-2xl cursor-pointer"onClick={openModal} />
            {isOpen ? (
                <Modal isOpen={isOpen} closeModal={closeModal} />  
            ):
            null
            }
        </span>
    );
}
export default ShopButton;