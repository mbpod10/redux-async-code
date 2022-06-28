import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const amount = useSelector(state => state.cart.amount)

  const toggleCart = () => {
    dispatch(uiActions.toggleShowCart())
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
