import Axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router';
import logoutIcon from '../../Common/img/log/logout.png';
import GoToShop from '../../Common/img/log/gotoshop.png';

const buttons = (props) => {
  const logoutHandler = () => {
    Axios.get(`/api/mongo/users/logout`).then(response => {
      console.log(response);
      if (response.status === 200) {
        props.history.push("/shop");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  return (
    <div>
      <a onClick={logoutHandler}><img src={logoutIcon} /></a>
      <a href="/shop/main" ><img src={GoToShop} /></a>
    </div>
  )
};

export default withRouter(buttons);
