import React from 'react';
import MainForm from '../MainForm/MainForm';
import ShopMainPage from './ShopMainPage';
import ShopMainBar from './ShopMainBar';
import { withRouter } from 'react-router';

const ShopMainWrapper = () => {
    return (
        <MainForm childSide={<ShopMainBar />} children={<ShopMainPage />} />
    );
};

export default withRouter(ShopMainWrapper);