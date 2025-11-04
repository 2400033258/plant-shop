import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (!existing) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    deleteItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
