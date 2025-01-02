import { useContext } from 'react';
import LOGO from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';

export default function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberofItems, item) => {
    return totalNumberofItems + item.quantity;
  }, 0);
  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={LOGO} alt="react food" />
          <h1>React Food</h1>
        </div>
        <nav>
          <Button textOnly>Cart ({totalCartItems})</Button>
        </nav>
      </header>
    </>
  );
}
