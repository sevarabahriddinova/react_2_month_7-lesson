import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios';

export const fetchProducts = createAsyncThunk('cart/fetchProducts', async () => {
  const response = await axios.get('/products');
  return response.data.products;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    cart: [],
    total: 0,
    subTotal: 0,
    vat: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      calculateTotals(state);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        calculateTotals(state);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

const calculateTotals = (state) => {
  state.subTotal = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  state.vat = state.subTotal * 0.12; 
  state.total = state.subTotal + state.vat;
};

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;