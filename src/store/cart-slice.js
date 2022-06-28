import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
  totalAmount: 0,
  items: [
    { id: 1, title: 'Nerf Gun', quantity: 0, total: 0, price: 6 },
    { id: 2, title: 'Keyboard', quantity: 0, total: 0, price: 15 },
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      state.totalAmount++
    },
    removeItem(state, action) {
      state.totalAmount--
    }
  }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer