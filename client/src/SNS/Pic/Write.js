import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import UpdatePic from './UpdatePic';

const Write = () => {
  const user = useSelector(state => state.user);

  return (
    <UpdatePic user={user} />
  );
};

export default withRouter(Write);