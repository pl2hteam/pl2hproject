import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Axios from 'axios';
import ReplyComment from './ReplyComment';

const Comment = (props) => {
  const [Comments, setComments] = useState([]);
  console.log(props);
  useEffect(() => {
    console.log(333333333333333);
    let id = {
      postId: props.postId,
    }

    Axios.post('/api/mysql/posts/comment/getComment', id)
      .then(response => {
        if (response.data.success) {
          console.log(response.data.comments);
          setComments("")
          setComments(response.data.comments);
        } else {
          alert('댓글 정보를 가져오지 못했습니다.');
        }
      })
  }, []);

  console.log(Comments);
  const [commentValue, setCommentValue] = useState("");

  const handleClick = (event) => {
    setCommentValue(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
      content: commentValue,
      writer: props.UserId,
      postId: props.id,
    }

    Axios.post('/api/mysql/posts/comment/saveComment', variables)
      .then(response => {
        if (response.data.success) {
          console.log(response.data.commentsInfo);
          setCommentValue("")
          setComments(response.data.commentsInfo)
        } else {
          alert('댓글을 저장하지 못했습니다.');
        }
      })
  }
  return (
    <div>
      <br />
      <p>댓글</p>
      <hr />

      {Comments && Comments.map((comment, index) => (
        (!comment.responseTo &&
          <React.Fragment>
            {/* <SingleComment comment={comment} postId={props.postData.id} refreshFunction={props.refreshFunction} /> */}
            {/* <ReplyComment CommentLists={props.commentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction} /> */}
          </React.Fragment>
        )
      ))}

      <from style={{ display: 'flex' }} onSubmit={onSubmit} >
        <textarea
          style={{ width: '100%', borderRadius: '5px' }}
          onChange={handleClick}
          value={commentValue}
          placeholder='댓글을 적어주세요.'
        />
        <br />
        <button style={{ width: '20%', height: '52px' }} onClick={onSubmit} >작성하기</button>
      </from>
    </div>
  );
};

export default Comment;
