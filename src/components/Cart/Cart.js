import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

const Cart = (props) => {

  const items = useSelector(state => state.cart.items)

  const itemArray = items.map((item, index) => {
    return (
      <CartItem
        key={item.id}
        item={{
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          total: item.total,
          price: item.price
        }}
      />
    )
  })

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemArray}
        {/* <CartItem
          item={{ title: 'Test Item', quantity: totalAmount, total: totalAmount * 6, price: 6 }}
        /> */}
      </ul>
    </Card>
  )


};

export default Cart;
