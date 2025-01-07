import { uiActions } from './uiSlice';

import { cartActions } from './cartSlice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://redux-advanced-f6831-default-rtdb.firebaseio.com/cart.json',
      );

      if (!response.ok) {
        throw new Error('Failed to fetch cart data!!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity : cartData.totalQuantity
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!!',
          message: 'Failed to fetch cart data!!',
        }),
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data...',
      }),
    );
    const sendRequest = async () => {
      const response = await fetch(
        'https://redux-advanced-f6831-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to send cart data!');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Successful!!',
          message: 'Cart data sent successfully!!',
        }),
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!!',
          message: 'Failed to send cart data!!',
        }),
      );
    }
  };
};
