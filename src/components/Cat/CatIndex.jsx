import React, { useState } from "react";
import { useParams } from "react-router";
import useGetCats from "../../Hooks/useGetCats";
import GangCatLoading from "../Loadings/GangCatLoading";
import GetComments from "./GetComments/GetComments";
import SendComments from "./SendComments/SendComments";
import HireButton from "../common/HireButton/HireButton";

function CatIndex() {
  const params = useParams();
  const catName = params.catName;
  const { data, loading, error } = useGetCats("/cats/cats");
  const filteredCat = data?.cats?.find((cat) => cat.name === catName);
  const catId = filteredCat?._id;
  if (loading) {
    return (
      <>
        
        <GangCatLoading />
      </>
    );
  }

  return (
    <div className="container m-auto">
      <div
        id="topside"
        className="container flex justify-center items-center my-10 gap-x-10"
      >
        <img
          src={filteredCat.imgUrl}
          alt="filteredCat"
          className=" w-72 rounded"
        />
        <div className="flex flex-col">
          <h1 className="text-orange-400 text-6xl mb-10 font-extrabold">
            {filteredCat.name}
          </h1>
          <span className="flex gap-x-7 items-center justify-center">
            <span>
              <h2 className="text-amber-500 font-extrabold text-start">
                {filteredCat.role}
              </h2>
            </span>

            <img
              src="/public/Images/Icons/cat-paw-dog-clip-art-cat-1564f2df6d7564d3a69ed7a0c3e9ff40.png"
              alt="cat-paw-dog-clip-art-cat-1564f2df6d7564d3a69ed7a0c3e9ff40.png"
              className="w-14 bg-amber-400 rounded flex justify-end"
            />
          </span>
          <span className="mt-5 p-2 bg-amber-900 rounded text-black font-extrabold text-3xl">
            Hire Price :<h1 className="text-yellow-500">{filteredCat.hirePrice}$</h1>
          </span>
        </div>
      </div>
      <div className="p-2 flex flex-col">
        <p className="primaryOrange text-black text-2xl p-3">
          {filteredCat.description} <br /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eveniet, enim. Commodi corrupti omnis
          accusantium autem, tempora eligendi sapiente odit nihil quisquam.
          Amet, libero nulla. Nobis sunt amet officiis ratione illum. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Sit enim aut
          praesentium dolore, aspernatur tempora. Exercitationem voluptate
          reiciendis dolores similique cupiditate, officiis doloremque aliquid,
          obcaecati error iusto voluptatum corrupti quos.
        </p>
      </div>
      <div className="flex flex-col">
      <HireButton filteredCat={filteredCat}/>

        <span className="primaryOrange text-black text-5xl p-3 rounded my-5 ">
          Comments
        </span>

        <GetComments catId={catId}/>
        <SendComments catId={catId}/>
      </div>
    </div>
  );
}

export default CatIndex;
