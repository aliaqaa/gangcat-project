import { FaTrashAlt } from "react-icons/fa";  

const RoleSelector = ({ selectedRoles, setSelectedRoles, setPage }) => {  
  
  const handleUncheckAll = () => {  
    setSelectedRoles([]);  
  };  
  
  const handleRoleChange = (role) => {  
    setSelectedRoles((prev) => {  
      if (prev.includes(role)) {  
        return prev.filter((r) => r !== role);  
      } else {  
        return [...prev, role];  
      }  
    });  
  };  

  const roles = ["gangster", "drug Dealer", "Hacker", "Gunner", "Girls Bussines"];  

  return (  
    <div className="mb-4 flex flex-row-reverse justify-between gap-4">  
      <div className="flex flex-col justify-start primaryOrange gap-2 p-4 rounded font-extrabold">  
        <button className="mb-2 flex items-center text-red-600" onClick={handleUncheckAll}>  
          <FaTrashAlt className="m-auto text-black hover:text-red-800 text-2xl" />  
        </button>  

        {roles.map((role) => (  
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
    </div>  
  );  
};  

export default RoleSelector;  