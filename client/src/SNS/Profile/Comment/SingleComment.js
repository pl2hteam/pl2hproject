import React, { useState } from 'react'
import { Comment, Avatar, Button, Input } from 'antd';
import Axios from 'axios';
import { useSelector } from 'react-redux';
const { TextArea } = Input;

const SingleComment = (props) => {
  const user = useSelector(state => state.user);
  console.log(props);
  const [CommentValue, setCommentValue] = useState("")
  const [OpenReply, setOpenReply] = useState(false)

  const handleChange = (event) => {
    setCommentValue(event.currentTarget.value)
  }

  const openReply = () => {
    setOpenReply(!OpenReply)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const variables = {
        writer: user.userData.id,
        postId: props.postId,
        responseTo: props.comment.id,
        content: CommentValue
    }

    Axios.post('/api/mysql/posts/comment/saveComment', variables)
        .then(response => {
            if (response.data.success) {
                setCommentValue("")
                setOpenReply(!OpenReply)
                props.refreshFunction(response.data.result)
            } else {
                alert('Failed to save Comment')
            }
        })
  }

  const actions = [
    <span onClick={openReply} key="comment-basic-reply-to">답글 달기</span>
  ]

  if (props.comment) {
    return (
      <div>
        <Comment
            actions={actions}
            author={props.comment.writer.name}
            avatar={
                <Avatar
                    src={props.comment.writer.image}
                    alt="image"
                />
            }
            content={
              <p>
                  {props.comment.content}
              </p>
            }
        />

        {OpenReply &&
          <form style={{ display: 'flex' }} onSubmit={onSubmit}>
              <TextArea
                  style={{ width: '100%', borderRadius: '5px' }}
                  onChange={handleChange}
                  value={CommentValue}
                  placeholder="댓글을 적어주세요."
              />
              <br />
              <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>작성하기</Button>
          </form>
        }

      </div>
    )
  } else {
    return <div>....loading</div>
  }
}

export default SingleComment
