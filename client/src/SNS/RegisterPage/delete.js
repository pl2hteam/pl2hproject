import Axios from 'axios';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const del =styled.form`
  width:10px;
  height:10px;
`;

const Delete = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    Axios.delete(`/api/mysql/profiles/write/delete/${props.profile.id}`)
      .then(response => {
        if (response.data.success) { console.log(323232);
          window.location.replace('./main')
        } else {
          alert('댓글을 저장하지 못했습니다.');
        }
      })
  }
  return (
      <del style={{ display:'flex' }} onSubmit={onSubmit}>
        <button style={{ width: '20%', height: '37px' }} onClick={onSubmit}  >삭제</button>
      </del>
  )
};

export default withRouter(Delete);