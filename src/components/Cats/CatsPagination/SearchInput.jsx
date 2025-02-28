const SearchInput = ({ query, setQuery, setPage }) => {  
    return (  
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
    );  
  };  
  
  export default SearchInput;  