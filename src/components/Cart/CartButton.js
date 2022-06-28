import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const totalAmount = useSelector(state => state.cart.totalAmount)

  const toggleCart = () => {
    dispatch(uiActions.toggleShowCart())
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
