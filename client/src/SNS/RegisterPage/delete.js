import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const del =styled.form`
width:10px;
height:10px;

`;
const Delete = (props) => {
console.log(props);


  const [Posts, setPosts] = useState([]);



  console.log(props,999999999999909);
 

  const onSubmit = (event) => {
    // console.log(props.profile.id,41)
    event.preventDefault();
    const variables = {
      
      id: props.profile.id
    }
    Axios.delete(`/api/mysql/profiles/write/delete/${props.profile.id}`)
      .then(response => {

        if (response.data.success) { console.log(323232);
          window.location.replace('./main')
         
        } else {
          alert('댓글을 저장하지 못했습니다.');
          // console.log(variables,99999)
          // console.log(response.data.postId ,999999999999909);
        }
      })
  }
  return (
   
      
      <del style={{ display:'flex' }} onSubmit={onSubmit}>
      
        <button style={{ width: '20%', height: '37px' }} onClick={onSubmit}  >삭제</button>

      </del>
    
  )
};

export default withRouter( Delete);