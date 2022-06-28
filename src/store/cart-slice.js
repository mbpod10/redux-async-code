import { createSlice } from "@reduxjs/toolkit"

const initialCartState = { amount: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    add(state) {
      state.amount++
    },
    subtract(state) {
      state.amount--
    }
  }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer