import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {

  const { title, quantity, price, id } = props.item;

  const reducer = useDispatch()

  const increasetotalAmount = () => {
    reducer(cartActions.addItem({ id: id, title: title, price: price }))
  }
  const decreasetotalAmount = () => {
    reducer(cartActions.removeItem({ id: id }))
  }

  const totalMoney = price * quantity

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalMoney.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreasetotalAmount}>-</button>
          <button onClick={increasetotalAmount}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
