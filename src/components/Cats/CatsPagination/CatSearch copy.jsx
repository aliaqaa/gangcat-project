import { useState, useEffect } from "react";  
import axios from "../../../Services/AxiosInstance";  
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import GangCatLoading from "../../Loadings/GangCatLoading";

const CatSearch = () => {  
  const [cats, setCats] = useState([]);  
  const [query, setQuery] = useState("");  
  const [selectedRoles, setSelectedRoles] = useState([]); // Change to array for multiple selections  
  const [page, setPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(1);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState("");  

  useEffect(() => {  
    const fetchData = async () => {  
      setLoading(true);  
      setError("");  

      const roleQuery = selectedRoles.length > 0 ? `&role=${selectedRoles.join(",")}` : ""; // Join selected roles for the query  
      const url = `/cats/search?query=${query}&page=${page}&limit=5${roleQuery}`;  

      try {  
        const response = await axios.get(url);  
        setCats(response.cats || []);  
        setTotalPages(response.data?.totalPages || 1);  
      } catch (err) {  
        setError("Error fetching data: " + (err.response?.data?.message || err.message));  
      } finally {  
        setLoading(false);  
      }  
    };  

    if (query || selectedRoles.length > 0 || page) {  
      fetchData();  
    }  
  }, [query, selectedRoles, page]);  
  const handleUncheckAll = () => {  
    setSelectedRoles([]); // Reset selected roles to an empty array  
  };  
  const handleRoleChange = (role) => {  
    setSelectedRoles((prev) => {  
      if (prev.includes(role)) {  
        return prev.filter((r) => r !== role); // Remove role if it's already selected  
      } else {  
        return [...prev, role]; // Add role if it's not selected  
      }  
    });  
    setPage(1);  
  };  

  return (  
    <div className="p-4">  
      <input  
        type="text"  
        placeholder="Search by name or description..."  
        value={query}  
        onChange={(e) => {  
          setQuery(e.target.value);  
          setPage(1);  
        }}  
        className="border p-5 w-full mb-4 primaryOrange text-black rounded-xl"  
      />  
  
      <div className="mb-4 flex flex-row-reverse justify-between gap-4">  
        <div className="flex flex-col justify-start primaryOrange gap-2 p-4 rounded font-extrabold">  
          <button   
            className="mb-2 flex items-center text-red-600"   
            onClick={handleUncheckAll}  
          >  
            <FaTrashAlt className="m-auto  text-black hover:text-red-800" /> {/* Trash can icon */}  
          </button>  
          
          {["gangster", "drug Dealer", "Hacker", "Gunner", "Girls Bussines"].map((role) => (  
            <label key={role} className="mr-2 flex items-center">  
              <input   
                className="appearance-none w-6 h-6 border border-black rounded-md checked:bg-orange-500 checked:border-transparent"   
                type="checkbox"  
                value={role}  
                checked={selectedRoles.includes(role)}  
                onChange={() => handleRoleChange(role)}  
              />  
              <span className="ml-2 text-black">  
                {role.charAt(0).toUpperCase() + role.slice(1)}  
              </span>  
              <style jsx>{`  
                input[type="checkbox"] {  
                  position: relative;  
                }  
                input[type="checkbox"]:checked::before {  
                  content: "✔";  
                  position: absolute;  
                  width: 100%;  
                  height: 100%;  
                  background-color: black;  
                  border-radius: 2px;  
                }  
              `}</style>  
            </label>  
          ))}  
        </div>  
  
        <div className="flex-1"> {/* Flex to allow it to grow and take available space */}  
          
          <ul className="mt-2 grid grid-cols-2">  
            {cats.length > 0 ? (  
              cats.map((cat) => (  
                <Link to={`/cats/${cat.name}`} className={ `p-1  flex flex-col m-10 rounded primaryOrange`}>
              <img src={cat.imgUrl} alt={cat.name} className="w-60 m-auto" />
              <h1 className={ `text-3xl font-extrabold mt-5 flex flex-col text-black`}>{cat.name}</h1>
            </Link>
              ))  
            ) : (  
              <>
              <p className="my-10">nothing found</p>
              <GangCatLoading/>  
              </>
            )}  
          </ul>  
        </div>  
      </div>  
  
      <div className="mt-4 flex justify-center space-x-2 text-black text-3xl mb-10">  
        <button  
          disabled={page === 1}  
          onClick={() => setPage(page - 1)}  
          className="px-3 py-1 border primaryOrange disabled:opacity-90 hover:opacity-100"  
        >  
           Prev  
        </button>  
        <span className="px-3 py-1 border primaryOrange">  
          Page {page} of {totalPages}  
        </span>  
        <button  
          disabled={page === totalPages}  
          onClick={() => setPage(page + 1)}  
          className="px-3 py-1 border primaryOrange disabled:opacity-90 hover:opacity-100"  
        >  
          Next   
        </button>  
      </div>  
    </div>  
  );  
};  

export default CatSearch;  