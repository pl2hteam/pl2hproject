import React from 'react'
import MainForm from '../MainForm/MainForm';
import DetailProductPageBar from './DetailProductPageBar';
import DetailProductPage from './DetailProductPage';
import { withRouter } from 'react-router';

const DetailProductPageWrapper = (props) => {
  return (
    <div>
      <MainForm childSide={<DetailProductPageBar />} children={<DetailProductPage info={props} />} />
    </div>
  )
}

export default withRouter(DetailProductPageWrapper);
