import { configureStore } from '@reduxjs/toolkit';  
import userReducer from '../Slice/userSlice';  
import basketReducer from "../Slice/basketSlice" 
const store = configureStore({  
  reducer: {  
    user: userReducer,  
    basket: basketReducer, 

  },  
});  

export default store;  