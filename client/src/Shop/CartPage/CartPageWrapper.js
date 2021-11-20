import React from 'react';
import MainForm from '../MainForm/MainForm';
import CartPage from './CartPage';
import { withRouter } from 'react-router';

const CartPageWrapper = (props) => {
  return (
    <div>
      <MainForm children={<CartPage info={props} />} />
    </div>
  )
};

export default withRouter(CartPageWrapper);
