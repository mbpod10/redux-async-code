import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
  totalAmount: 0,
  items: [],
  changed: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount || 0
      state.items = action.payload.items || [];
    },
    addItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (!existingItem) {
        state.items.push({
          title: action.payload.title,
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price
        })
      }
      else {
        existingItem.quantity++
      }
      state.changed = true
      state.totalAmount++
    },
    removeItem(state, action) {
      const itemToRemove = state.items.find(item => item.id === action.payload.id)
      itemToRemove.quantity--

      const index = state.items.indexOf(itemToRemove)

      if (itemToRemove.quantity === 0) {
        state.items.splice(index, 1)
      }
      state.changed = true
      state.totalAmount--
    }
  }
})




export const cartActions = cartSlice.actions
export default cartSlice.reducer