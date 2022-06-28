import { createSlice } from "@reduxjs/toolkit"
import { uiActions } from "./ui-slice"


const initialCartState = {
  totalAmount: 0,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

// export const sendCartData = (cart) => {

//   return async (dispatch) => {
//     dispatch(uiActions.showNotification({
//       status: 'pending',
//       title: 'Sending...',
//       message: 'Sending cart data!'
//     }))

//     const sendRequest = async () => {

//       const response = await fetch('https://react-http-6b69a-default-rtdb.firebaseio.com/cart.json',
//         { method: 'PUT', body: JSON.stringify(cart) })

//       if (!response.ok) { throw new Error('Something Went Wrong') }
//     }

//     try {
//       await sendRequest()
//       dispatch(uiActions.showNotification({
//         status: 'success',
//         title: 'Success!',
//         message: 'Sent cart data successfully'
//       }))
//     }
//     catch (error) {
//       dispatch(uiActions.showNotification({
//         status: 'error',
//         title: 'Error!',
//         message: 'Sent cart data failed'
//       }))
//     }

//   }
// }

export const cartActions = cartSlice.actions
export default cartSlice.reducer