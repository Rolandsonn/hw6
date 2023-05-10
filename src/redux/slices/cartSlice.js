import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGoods = createAsyncThunk("goods/fetchGoods", async () => {
  return axios
    .get("https://fakerapi.it/api/v1/products?_quantity=10")
    .then((resp) => resp.data.data);
});

const initialState = {
  totalPrice: 0,
  loading: false,
  items: [],
  cart: [],
  error: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.cart.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count += 1;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.cart.reduce((acc, obj) => {
        console.log(obj.price);
        return +obj.price * obj.count + acc;
      }, 0);
    },
    clearItems(state) {
      state.cart = [];
      state.totalPrice = 0;
    },
    deleteItems(state, action) {
      const updatedItems = state.cart
        .filter((obj) => obj.id !== action.payload)
        .map((obj) => {
          const { totalPrice, ...rest } = obj;
          return rest;
        });
      return { ...state, cart: updatedItems };
    },
    minusItem(state, action) {
      const findItem = state.cart.find((obj) => obj.id === action.payload.id);

      if (findItem && findItem.count > 0) {
        findItem.count -= 1;
      }
      if (state.totalPrice >= 0) {
        state.totalPrice = state.cart.reduce((acc, obj) => {
          return +obj.price * obj.count - acc;
        }, 0);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchGoods.rejected, (state, action) => {
      state.loading = false;
      state.items = [];
      state.error = action.error.message;
    });
  },
});

export const { addItem, clearItems, deleteItems, minusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
