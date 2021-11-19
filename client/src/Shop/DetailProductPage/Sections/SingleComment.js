import React, { useEffect, useState } from 'react'
import { Comment, Avatar, Button, Input } from 'antd';
import Axios from 'axios';
import { useSelector } from 'react-redux';
const { TextArea } = Input;

const SingleComment = (props) => {
    const user = useSelector(state => state.user);
    const [CommentValue, setCommentValue] = useState("")
    const [OpenReply, setOpenReply] = useState(false)
    const [Writer, setWriter] = useState("");

    const handleChange = (event) => {
        setCommentValue(event.currentTarget.value)
    }

    const openReply = () => {
        setOpenReply(!OpenReply)
    }

    useEffect(() => {
      const userData = { userInfo : user.userData };
      if (user.userData.gender) {
        Axios.get('/api/mongo/users/sns/getMongo', userData)
          .then(response => {
            if (response.data.success) {
              setWriter(response.data.user[0]._id);
            } else {
              alert('Failed')
            }
        })
      } else {
        setWriter(user.userData._id);
      }
    }, [user.userData])
    
    const onSubmit = (event) => {
      event.preventDefault();

      const variables = {
        writer: Writer,
        postId: props.postId,
        responseTo: props.comment._id,
        content: CommentValue
      }

      Axios.post('/api/mongo/product/saveComment', variables)
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