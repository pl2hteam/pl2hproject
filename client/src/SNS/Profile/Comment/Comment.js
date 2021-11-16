import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Comment = (props) => {
  const user = useSelector(state => state.user)
  const [commentValue, setcommentValue] = useState("");
  const [Comments, setComments] = useState([]);

  const variables = {
    postId: props.postData.id,
  }
  
  useEffect(() => {
    getComment(variables);
  }, [])

  const getComment = (variables) => {
    Axios.post('/api/mysql/posts/comment/getComment', variables)
      .then(response => {
        if(response.data.success) {
          setComments(response.data.comments);
          setcommentValue("");
        } else {
          alert('댓글을 가져오지 못했습니다.')
        }
      })
  }

  console.log(Comments);

  const handleClick = (event) => {
    setcommentValue(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      content: commentValue,
      writer: user.userData.id,
      postId: props.postData.id,
    }

    Axios.post('/api/mysql/posts/comment/saveComment', variables)
    .then(response => {
     if (response.data.success) {
      getComment(variables);
     } else {
       alert('댓글을 저장하지 못했습니다.')
     } 
    })
  }
  const CommentsInfo = Comments.map((info, index) => {
    console.log(info);
    return (
      <div>
        <div>
          {/* <span>{info.User.image}</span> */}
          <span>{info.User.name} : </span>
          <span>{info.content}</span>
        </div>
        <div>
          {/* 몇시간후? */}
          {/* 답근? */}
        </div>
      </div>
    )
  })

  return (
    <div>
      <br />
      <p>댓글</p>
      <br />
      <div>
        {CommentsInfo}
      </div>
      <form style={{ display:'flex' }} onSubmit={onSubmit}>
        <textarea 
          style={{ width: '100x%', borderRadius: '5px' }}
          onChange={handleClick}
          value={commentValue}
          placeholder="댓글 달기..."
        />
        <br />
        <button style={{ width: '20%', height: '37px' }} onClick={onSubmit} >게시</button>

      </form>
    </div>
  )
};

export default Comment;
