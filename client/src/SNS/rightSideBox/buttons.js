import Axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router';
import logoutIcon from '../../Common/img/log/logout.png';
import GoToShop from '../../Common/img/log/gotoshop.png';
import styled from 'styled-components';

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
  
  const LinkButton = styled.div`
    .btn-style:hover {
      opacity: 0.7;
    }
  `

  return (
    <LinkButton>
      <a onClick={logoutHandler}><img className="btn-style" src={logoutIcon} /></a>
      <a href="/shop/main" ><img className="btn-style" src={GoToShop} /></a>
    </LinkButton>
  )
};

export default withRouter(buttons);
