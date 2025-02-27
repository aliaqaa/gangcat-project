import React from "react";
import useGetCats from "../../../Hooks/useGetCats";

function CatsPagination() {
    const { data, loading, error } = useGetCats("/cats/cats?");

  return (
    <div className="flex flex-col">
       <input type="text" />
    </div>
  );
}

export default CatsPagination;
