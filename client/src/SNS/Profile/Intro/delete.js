import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const Delete = (props) => {
  const [postData, setPostData] = useState([]);
  let index = (props.modal.index);

  useEffect(() => {
    setPostData(props.modal.modal);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    
    Axios.delete(`/api/mysql/posts/write/delete/${postData[index].id}`)
      .then(response => {
        if (response.data.success) {
          window.location.replace('./profile')
        } else {
          alert('댓글을 저장하지 못했습니다.');
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