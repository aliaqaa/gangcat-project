import { Link } from "react-router";  
import GangCatLoading from "../../Loadings/GangCatLoading";  

const CatList = ({ cats, loading }) => {  
  if (loading) return <GangCatLoading />;  
  
  return (  
    <ul className="mt-2 grid grid-cols-2 m-auto">  
      {cats.length > 0 ? (  
        cats.map((cat) => (  
          <Link to={`/cats/${cat.name}`} className={`p-1 flex flex-col m-10 rounded primaryOrange`}>  
            <img src={cat.imgUrl} alt={cat.name} className="w-60 m-auto" />  
            <h1 className={`text-3xl font-extrabold mt-5 flex flex-col text-black`}>{cat.name}</h1>  
          </Link>  
        ))  
      ) : (  
        <p className="my-10">Nothing found</p>  
      )}  
    </ul>  
  );  
};  

export default CatList;  