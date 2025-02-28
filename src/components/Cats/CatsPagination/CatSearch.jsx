import { useState, useEffect } from "react";  
import axios from "../../../Services/AxiosInstance";  
import { FaTrashAlt } from "react-icons/fa";  
import GangCatLoading from "../../Loadings/GangCatLoading";  
import SearchInput from "./SearchInput";  
import RoleSelector from "./RoleSelector";  
import CatList from "./CatList";  
import Pagination from "./Pagination";  

const CatSearch = () => {  
  const [cats, setCats] = useState([]);  
  const [query, setQuery] = useState("");  
  const [selectedRoles, setSelectedRoles] = useState([]);  
  const [page, setPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(1);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState("");  

  useEffect(() => {  
    const fetchData = async () => {  
      setLoading(true);  
      setError("");  

      const roleQuery = selectedRoles.length > 0 ? `&role=${selectedRoles.join(",")}` : "";  
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

  return (  
    <div className="p-4 container  m-auto">  
      <SearchInput query={query} setQuery={setQuery} setPage={setPage} />  
      <div className="flex flex-row-reverse">
      <RoleSelector selectedRoles={selectedRoles} setSelectedRoles={setSelectedRoles} setPage={setPage} />  
      <div className="flex flex-col justify-center m-auto">
      <CatList cats={cats} loading={loading} />  
        
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />  
         </div>

      </div>
    </div>  
  );  
};  

export default CatSearch;  