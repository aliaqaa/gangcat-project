import { createSlice } from '@reduxjs/toolkit';  

const initialState = {  
  items: [], // Array of items in the basket  
};  

export const basketSlice = createSlice({  
  name: 'basket',  
  initialState,  
  reducers: {  
    addItem: (state, action) => {  
      // Payload should be the item to add  
      state.items = [...state.items, action.payload];  
    },  
    removeItem: (state, action) => {  
      // Payload should be the item's ID to remove  
      state.items = state.items.filter((item) => item.id !== action.payload);  
    },  
    clearBasket: (state) => {  
      state.items = [];  
    },  
  },  
});  

export const { addItem, removeItem, clearBasket } = basketSlice.actions;  

// Selectors (optional, but recommended - allow you to easily access data from the slice)  
export const selectBasketItems = (state) => state.basket.items;  
export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0); // Example: Summing prices  

export default basketSlice.reducer;  