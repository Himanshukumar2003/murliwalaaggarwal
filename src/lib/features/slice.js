import { useAuth } from "@/providers/auth-provider";
import { getCartItems } from "@/services/cart-services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isCartOpen: false,
  total: 0,
};

export const fetchCartItems = createAsyncThunk(
  "products/fetchCartItems",
  async () => {
    const response = await getCartItems();
    return response.data;
  }
);

export const updateCartItem = createAsyncThunk(
  "products/updateCartItem",
  async (id) => {
    const response = await updateCartItem(id);
    return response;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.total = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.total = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
      state.total = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
  extraReducers: (builder) => {
    // fetchProducts
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  toggleCart,
  closeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
