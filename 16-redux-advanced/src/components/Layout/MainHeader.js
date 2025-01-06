import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const handleToggleCart = () => {
    dispatch(uiActions.toggleVisible());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={handleToggleCart} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
