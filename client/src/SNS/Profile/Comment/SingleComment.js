// import React from 'react';
// import { Comment, Avatar, Button, Input } from 'antd';
// import { useState } from 'react';
// import Axios from 'axios';

// const { TextArea } = Input;

// const SingleComment = (props) => {
//   const [OpenReply, setOpenReply] = useState(false)
//   const [CommentValue, setCommentValue] = useState("")

//   const onClickReplyOpen = () => {
//     setOpenReply(!OpenReply);
//   }

//   const onHandleChange = (event) => {
//     setCommentValue(event.currentTarget.CommentValue)
//   }

//   const onSubmit = (event) => {
//     event.preventDefault();

//     console.log(props);
//     const variables = {
//       content: CommentValue,
//       writer: props.user.userData.id,
//       postId: props.postData.id,
//       // responseTo: 
//     }

//     Axios.post('/api/mysql/posts/comment/saveReplyComment', variables)
//     .then(response => {
//      if (response.data.success) {
//        console.log(response.data);
//      } else {
//        alert('댓글을 저장하지 못했습니다.')
//      } 
//     })
//   }
//   console.log(props.comment);
//   const actions = [
//     <span onClick={onClickReplyOpen} key="comment-basic-reply-to">답글</span>
//   ]
//   return (
//     <div>
//       <Comment 
//         actions={actions}
//         author
//         avatar={<Avatar src alt />}
//         // content={<p>{props.comment</p>}
//       />

//       {OpenReply &&
//         <form style={{ display:'flex' }} onSubmit={onSubmit}>
//           <textarea 
//             style={{ width: '100x%', borderRadius: '5px' }}
//             onChange={onHandleChange}
//             value={CommentValue}
//             placeholder="댓글 달기..."
//           />
//           <br />
//           <button style={{ width: '20%', height: '37px' }} onClick={onSubmit} >게시</button>
//         </form>
//       }
      
//     </div>
//   )
// };

// export default SingleComment;
