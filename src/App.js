import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification"
import { sendCartData, fethCartData } from "./store/cart-actions"


let isInitial = true

function App() {

  const showCart = useSelector(state => state.ui.showCart)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fethCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    if (cart.changed) {
      dispatch(sendCartData(cart))

    }
  }, [cart, dispatch])

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
