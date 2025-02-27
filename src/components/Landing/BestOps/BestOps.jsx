import React from "react";
import useGetCats from "../../../Hooks/useGetCats";
import { Link } from "react-router";
import GangCatLoading from "../../Loadings/GangCatLoading";

function BestOps() {
  const { data, loading, error } = useGetCats("/cats/cats");
  if (loading) {
    return (
      <>
        <h1 className="text-8xl uppercase mb-10 text-orange-600 text-center flex justify-center">
          Best Operators
        </h1>
        <GangCatLoading /> 
      </>
    );
  }

  
  return (
    <>
      <h1 className="text-8xl uppercase mb-10  text-orange-600  text-center flex justify-center">
        Best Operators
      </h1>
      <div className="flex container m-auto flex-wrap mb-20">
        {data?.cats?.slice(0,2).map((cat,index) => (
          <div key={cat.id} className={`w-1/2 flex items-center p-5  justify-center ${index % 2 == 0 ? "primaryOrange" : "bg-black"}`}>
            <Link to={`/cats/${cat.name}`} className={ `p-3  flex flex-col m-10 ${index % 2 == 0 ? "bg-black" : "primaryOrange"}`}>
              <img src={cat.imgUrl} alt={cat.name} className="w-60 m-auto" />
              <h1 className={ `text-3xl font-extrabold mt-5 flex flex-col ${index % 2 == 0 ? "bg-black text-orange-600" : "primaryOrange text-black"}`}>{cat.name}</h1>
            </Link>
          </div>
        ))}
        {data?.cats?.slice(2,4).map((cat,index) => (
          <div key={cat.id} className={`w-1/2 flex items-center p-5  justify-center ${index % 2 == 0 ?  "bg-black" :"primaryOrange"}`}>
            <Link to={`/cats/${cat.name}`} className={ `p-3  flex flex-col m-10 ${index % 2 == 0 ? "bg-black" : "primaryOrange"}`}>
              <img src={cat.imgUrl} alt={cat.name} className="w-60 m-auto" />
              <h1 className={ `text-3xl font-extrabold mt-5 flex flex-col ${index % 2 == 0 ? "bg-black text-orange-600" : "primaryOrange text-black"}`}>{cat.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default BestOps;
