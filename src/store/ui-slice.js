import { createSlice } from "@reduxjs/toolkit"

const initiaUISTate = { showCart: false, notification: null }

const uiSlice = createSlice({
  name: 'ui',
  initialState: initiaUISTate,
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      }
    }
  }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer