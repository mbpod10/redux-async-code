import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification"
// import sendCartData from "./store/cart-slice"

let isInitial = true

function App() {

  const showCart = useSelector(state => state.ui.showCart)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  const dispatch = useDispatch()

  useEffect(() => {

    const makeApiCall = async () => {

      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }))
      const response = await fetch('https://react-http-6b69a-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart)
        })

      if (!response.ok) {

        throw new Error('Something Went Wrong')
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully'
      }))


    }

    if (isInitial) {
      isInitial = false
      return
    }

    makeApiCall()
      .catch(error => {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sent cart data failed'
        }))
      })

  }, [cart, dispatch])

  // useEffect(() => {   

  //   if (isInitial) {
  //     isInitial = false
  //     return
  //   }
  //   disp


  // }, [cart, dispatch])

  return (
    <>
      {notification &&
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title} />
      }
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
