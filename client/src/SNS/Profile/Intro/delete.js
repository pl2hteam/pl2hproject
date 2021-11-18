import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';


const Delete = (props) => {
console.log(props);
// console.log(props.delete.images);

  const [Posts, setPosts] = useState([]);

  // const onChangePostId = (event) =>{
  //   setPosts(event.currenTarget.value);
  // }

  // useEffect(() => {
  //   onChangePostId();
  // }, [])

  console.log(props,999999999999909);
  console.log(props,9876)

  const onSubmit = (event) => {
    console.log(props,9876)
    event.preventDefault();
  
    Axios.delete(`/api/mysql/posts/write/delete/${props.modal.modal.id}`)
      .then(response => {

        if (response.data.success) {  console.log(props,9876)
          window.location.replace('./profile')
         
        } else {
          alert('댓글을 저장하지 못했습니다.');
          // console.log(variables,99999)
          // console.log(response.data.postId ,999999999999909);
        }
      })
  }
  return (
   
      
      <form style={{ display:'flex' }} onSubmit={onSubmit}>
      
        <button style={{ width: '20%', height: '37px' }} onClick={onSubmit}  >삭제</button>

      </form>
    
  )
};

export default withRouter( Delete);