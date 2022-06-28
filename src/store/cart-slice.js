import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
  totalAmount: 0,
  items: [
    // { id: 1, title: 'Nerf Gun', quantity: 0, total: 0, price: 6 },
    // { id: 2, title: 'Keyboard', quantity: 0, total: 0, price: 15 },
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const itemExists = state.items.find(item => item.id === action.payload.id)
      if (!itemExists) {
        state.items.push({
          title: action.payload.title,
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price
        })
      }
      else {
        itemExists.quantity++
      }
      state.totalAmount++
    },
    removeItem(state, action) {
      const itemToRemove = state.items.find(item => item.id === action.payload.id)
      itemToRemove.quantity--

      const index = state.items.indexOf(itemToRemove)

      if (itemToRemove.quantity === 0) {
        state.items.splice(index, 1)
      }
      state.totalAmount--
    }
  }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer