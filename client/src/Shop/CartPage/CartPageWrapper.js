import React from 'react';
import MainForm from '../MainForm/MainForm';
import CartPageBar from './CartPageBar';
import CartPage from './CartPage';
import { withRouter } from 'react-router';

const CartPageWrapper = (props) => {
  return (
    <div>
      <MainForm childSide={<CartPageBar />} children={<CartPage info={props} />} />
    </div>
  )
};

export default withRouter(CartPageWrapper);
