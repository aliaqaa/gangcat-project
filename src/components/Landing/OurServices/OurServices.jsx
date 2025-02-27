import React from "react";
import OurServicesItems from "../../../Mock/OurServicesItem";

function OurServices() {
  return (
    <div className="container m-auto bg-black text-orange-600 my-20">
      <h1 className="text-8xl uppercase mb-42">Our Services</h1>
      <div className="flex mt-5 gap-10">
        {OurServicesItems.map((item) => (
          <div key={item.id} className="flex flex-col justify-center m-auto">
            <div
              className={` flex  primaryOrange  p-10 items-center justify-center rounded `}
            >
              <img
                src={item.Img}
                alt="item.img"
                className={`${item.className} w-62 h-72 `}
              />
            </div>
            <h1 className="uppercase text-4xl mt-10">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
