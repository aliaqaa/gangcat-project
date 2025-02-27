import { useState, useEffect } from "react";
import axios from "../Services/AxiosInstance";

const useGetCats = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response);
      } catch (err) {
        setError(err + "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetCats;
