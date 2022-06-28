import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = (props) => {

  const showCart = useSelector(state => state.ui.showCart)
  const amount = useSelector(state => state.cart.amount)

  return (

    (showCart &&
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {amount > 0 &&
            <CartItem
              item={{ title: 'Test Item', quantity: amount, total: amount * 6, price: 6 }}
            />
          }
        </ul>
      </Card>)

  );
};

export default Cart;
