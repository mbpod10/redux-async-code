import { createSlice } from "@reduxjs/toolkit"

const initiaUISTate = { showCart: true }

const uiSlice = createSlice({
  name: 'ui',
  initialState: initiaUISTate,
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart
    },
    addToCart(state, action) {
      console.log(action)
    }
  }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer