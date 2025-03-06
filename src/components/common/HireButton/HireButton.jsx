import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../Slice/basketSlice"; // Update the path to your actions file
import Modal from "../Modal/Modal";
function HireButton({ filteredCat }) {
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const addCatHandler = () => {
    dispatch(addItem(filteredCat));  
      setOpen(true);

  };
  return (
    <>
      <button
        onClick={addCatHandler}
        className="bg-[#FF3300] text-black text-5xl p-3 rounded my-5 cursor-pointer hover:scale-110 transition font-extrabold animate-pulse"
      >
        Hire Me Now!
      </button>
      {isOpen ? <Modal isOpen={isOpen} closeModal={closeModal} /> : null}
    </>
  );
}
export default HireButton;
