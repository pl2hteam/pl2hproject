import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import ReplyComment from "./ReplyComment";
import './style/Comment.css';

const { TextArea } = Input;

const Comments = (props) => {
  const user = useSelector((state) => state.user);
  const [Comment, setComment] = useState("");
  const [Writer, setWriter] = useState("");

  const handleChange = (event) => {
    setComment(event.currentTarget.value);
  };

  useEffect(() => {
    const userData = { userInfo : user.userData };
    if (user.userData) {
      if (user.userData.gender) {
        axios.get('/api/mongo/users/sns/getMongo', userData)
          .then(response => {
            if (response.data.success) {
              setWriter(response.data.user[0]._id);
            } else {
              alert('Failed')
            }
        })
      }
    } else {
      if (user.userData) {
        setWriter(user.userData._id);
      }
    }
  }, [user.userData])

  const onSubmit = (event) => {
    event.preventDefault();
   
    const variables = {
      content: Comment,
      writer: Writer,
      postId: props.postId,
    };

    axios.post("/api/mongo/product/saveComment", variables).then((response) => {
      if (response.data.success) {
        setComment("");
        props.refreshFunction(response.data.result);
      } else {
        alert("Failed to save Comment");
      }
    });
  };

  return (
    <div className="postPage-comment">
      <p className="comment-text">댓글</p>
      <hr />
      {props.commentLists &&
        props.commentLists.map(
          (comment, index) =>
            !comment.responseTo && (
              <React.Fragment>
                <SingleComment
                  comment={comment}
                  postId={props.postId}
                  refreshFunction={props.refreshFunction}
                />
                <ReplyComment
                  CommentLists={props.commentLists}
                  postId={props.postId}
                  parentCommentId={comment._id}
                  refreshFunction={props.refreshFunction}
                />
              </React.Fragment>
            )
        )}

      <form className="comment-form" onSubmit={onSubmit}>
        <TextArea
          className="comment-textarea"
          onChange={handleChange}
          value={Comment}
          placeholder="댓글을 적어주세요."
        />
        <Button className="comment-button" onClick={onSubmit}>
          작성하기
        </Button>
      </form>
    </div>
  );
};

export default Comments;
