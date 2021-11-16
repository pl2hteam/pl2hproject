import React from 'react'
import MainForm from '../MainForm/MainForm';
import DetailProductPage from './DetailProductPage';
import { withRouter } from 'react-router';

const DetailProductPageWrapper = (props) => {
  return (
    <div>
      <MainForm children={<DetailProductPage info={props} />} />
    </div>
  )
}

export default withRouter(DetailProductPageWrapper);
