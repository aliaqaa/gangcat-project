import React from "react";
import CmsItemsMock from "../../../Mock/CmsItemsMock";
import { IoIosLogOut } from "react-icons/io";

function CmsItems({ setActivePanel, activePanel }) {
  const onClickHandler = (id) => {
    setActivePanel(id); // Update activePanel based on the clicked button
  };
  return (
    <div className="flex flex-col p-5">
      {CmsItemsMock.map((item) => (
        <span
          key={item.id}
          className={`text-black font-extrabold my-4 cursor-pointer
         ${activePanel === item.id ? "bg-black  text-orange-500 " : ""}
        `}
          onClick={() => onClickHandler(item.id)} // Pass the item.id to the handler
        >
          {item.title}
        </span>
      ))}
      <button className="flex items-center m-auto gap-x-4 text-2xl text-red-600 cursor-pointer">
        Log Out <IoIosLogOut />
      </button>
    </div>
  );
}
export default CmsItems;
