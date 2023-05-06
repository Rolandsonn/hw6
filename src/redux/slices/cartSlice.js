import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((acc, obj) => {
        console.log(obj.price);
        return +obj.price * obj.count + acc;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    deleteItems(state, action) {
      const updatedItems = state.items
        .filter((obj) => obj.id !== action.payload)
        .map((obj) => {
          const { totalPrice, ...rest } = obj;
          return rest;
        });
      return { ...state, items: updatedItems };
    },
  },
});

export const { addItem, clearItems, deleteItems } = cartSlice.actions;
export default cartSlice.reducer;
