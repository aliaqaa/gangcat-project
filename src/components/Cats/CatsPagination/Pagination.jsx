const Pagination = ({ page, setPage, totalPages }) => {  
    return (  
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
    );  
  };  
  
  export default Pagination;  