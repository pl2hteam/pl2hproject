import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Axios from 'axios';
import SingleComment from './SingleComment';

const Comment = (props) => {
  console.log(props);
  const [commentValue, setCommentValue] = useState("");

  const handleClick = (event) => {
    setCommentValue(event.currentTarget.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    
    const variables = {
      content: commentValue,
      writer: props.postData.UserId,
      postId: props.postData.id,
    }

    Axios.post('/api/mysql/posts/comment/saveComment', variables)
      .then(response => {
        if (response.data.success) {
          console.log(response.data.comments);
          setCommentValue("")
          props.refreshFunction(response.data.comments)
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
      {props.commentLists && props.commentLists.map((comment, index) => (
                (!comment.responseTo &&
                    <React.Fragment>
                        <SingleComment comment={comment} postId={props.postData.id} refreshFunction={props.refreshFunction} />
                        {/* <ReplyComment CommentLists={props.commentLists} postId={props.postId} parentCommentId={comment._id} refreshFunction={props.refreshFunction} /> */}
                    </React.Fragment>
                )
            ))};

      <from style={{ display: 'flex' }} onSubmit={onSubmit} >
        <textarea
          style={{ width: '100%', borderRadius: '5px' }}
          onChange={handleClick}
          value={commentValue}
          placeholder='댓글을 적어주세요.'
        />
        <br/>
        <button style={{ width: '20%', height: '52px' }} onClick={onSubmit} >작성하기</button>
      </from>
    </div>
  );
};

export default Comment;
