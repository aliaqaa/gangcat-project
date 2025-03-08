import React, { useState } from "react";  
import { useDispatch, useSelector } from "react-redux";  
import { selectBasketItems } from "../../../Slice/basketSlice";  
import axios from "axios";  
import Cookies from 'js-cookie';  
import { removeItem, clearBasket } from '../../../Slice/basketSlice'; // Adjust path as needed  

const Modal = ({ isOpen, closeModal }) => {  
    if (!isOpen) return null;  
    const dispatch = useDispatch();  

    const basketItems = useSelector(selectBasketItems);  
    const buyerId = Cookies.get("UserId");  
    const [plea, setPlea] = useState("");  
    const firstCatId = basketItems.length > 0 ? basketItems[0]._id : null;  
    const handleBackdropClick = (e) => {  
        if (e.target === e.currentTarget) {  
            closeModal();  
        }  
    };  
    
    const creatTransactionHandler = async (catId) => {  
        try {  
            console.log("catId:", catId); // Log catId here
            const response = await axios.post(  
                `https://ali-tousi-api.liara.run/api/cats/createTransaction`,  
                {  
                    catId: firstCatId,  
                    buyerId: buyerId,  
                    plea: plea,  
                }  
            );  
            console.log(response.data);  
            alert("Your Request Will Be Done Soon")
            closeModal();
            dispatch(clearBasket());  
            // Handle success  
        } catch (error) {  
            console.error("Error creating transaction:", error);  
            // Handle error  
        }  
    };  
    
    const handlePleaChange = (e) => {  
        setPlea(e.target.value);  
    };  
    
    return (  
        <div  
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10"  
            onClick={handleBackdropClick}  
        >  
            <div className="primaryOrange p-4 rounded shadow-lg relative">  
                <button  
                    className="absolute top-2 right-2 text-black cursor-pointer"  
                    onClick={closeModal}  
                >  
                    Close  
                </button>  
                <div className="p-4">  
                    <h2 className="text-lg font-bold text-black">Shopping Cart</h2>  
                    {basketItems.length > 0 ? (  
                        basketItems.map((cat) => (  
                            <div  
                                className={`p-1 flex flex-col m-10 rounded primaryOrange`}  
                                key={cat.id}  
                            >  
                                <img src={cat.imgUrl} alt={cat.name} className="w-60 m-auto" />  
                                <h1  
                                    className={`text-3xl font-extrabold mt-5 flex flex-col text-black`}  
                                >  
                                    {cat.name}  
                                </h1>  
                                <textarea  
                                    name="plea"  
                                    id="authInput"  
                                    className="bg-black bg-auth-mode p-5 placeholder-black text-black my-5 rounded"  
                                    placeholder="Type Your Plea ..."  
                                    rows="5"  
                                    value={plea}  
                                    onChange={handlePleaChange}  
                                ></textarea>  
                                <button  
                                    onClick={() => creatTransactionHandler(cat.id)} // Pass cat.id  
                                    className="p-2 px-20 bg-orange-400 rounded text-red-600 text-2xl font-extrabold"  
                                >  
                                    Pay {cat.hirePrice}$  
                                </button>  
                            </div>  
                        ))  
                    ) : (  
                        <p className="my-10">Nothing found</p>  
                    )}  
                </div>  
            </div>  
        </div>  
    );  
};  
export default Modal;