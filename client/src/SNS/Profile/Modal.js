import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Main from './Intro/Main'
import Feed from './Intro/feed.css'

import { Typography, Button, message, Input } from "antd";
const Modal = (props) => {
  
  const {
    
    setOpenModal,
  
  } = props;
  return (<Form>
<Close
      onClick={() => {
         setOpenModal(false);
       }}
     >
       닫기
   </Close>
<article>
     
     <header>
       <div class="profile-of-article">
         {/* <img class="img-profile pic" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/28434316_190831908314778_1954023563480530944_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=srwTEwYMC28AX8gftqw&oh=98c7bf39e441e622c9723ae487cd26a0&oe=5F68C630" alt="dlwlrma님의 프로필 사진"/> */}
         {/* <span class="userID main-id point-span"><Meta description={`${postData.HashtagId}`} /></span> */}
       </div>
       <img class="icon-react icon-more" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="more"/>
     </header>
     <div class="main-image">
     <img class="pic" src="http://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg" alt="johnnyjsuh님의 프로필 사진"/>
     {/* <ImageSlider images={postData} /> */}
     </div>
     <div class="icons-react">
       <div class="icons-left">
         <img class="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트"/>
         <img class="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="말풍선"/>
         <img class="icon-react" src="img/dm.png" alt="DM"/>  
       </div>
       <img class="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="북마크"/>
     </div>
    
   
     <div class="reaction">
       <div class="liked-people">
         
         <img class="pic" src="http://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg" alt="johnnyjsuh님의 프로필 사진"/>
         <p><p class="point-span">johnnyjsuh</p>님 <span class="point-span">외 2,412,751명</span>이 좋아합니다</p>
       </div>
       <div class="description">
         {/* <p> <Meta description={`111${postData.content}`} /> 🌱</p> */}
       </div>
       <div class="comment-section">
         <ul class="comments">
           <li>
             <span><span class="point-span userID">postmalone</span>내가 입으면 더 잘어울릴 것 같아</span>
             <div>
               <img class="comment-more" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="more"/>
               <div class="comment-like">
                 <img class="comment-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트"/>
                 <img class="comment-heart-liked" src="img/liked.png" alt="좋아요된하트"/>
               </div>
             </div>
           </li>
         </ul>
         <div class="time-log">
           <span>32분 전</span>
         </div>
       </div>
     </div>
     <div class="hl"></div>
     <div class="comment">
 {/*       
 <Form >
 
  
 
   <br />
   <br />
   <label>물품명</label>1
   <Input onChange={onPostTitle} value={profilecontent} />
   <br />
 
 
   <Button onClick={onSubmit}>Submit</Button>
 </Form> */}
       {/* <input id="input-comment" class="input-comment" type="text" placeholder="댓글 달기..." />
       <button type="submit" class="submit-comment" disabled>게시</button> */}
     </div>
   </article>

  </Form>
   
  );
};

    
const Form = styled.div`
  position: absolute;
  width: 800px;
  height: 600px;
  border-radius: 10px;
 
  text-align: left;
  color: black;
  z-index: 999;
`;
const Header = styled.div`
  padding: 1vw 0 0.5vw 1vw;
  font-weight: 700;
  border-bottom: 2px solid #d3d3d3;
`;

const ViewDate = styled.div`
  padding: 0.4vw 0 0.3vw 1vw;
  border-bottom: 2px solid #d3d3d3;
`;
const Events = styled.div``;
const Contexts = styled.textarea`
  background-color: #fffae0;
  padding: 1vw 0 0 0.5vw;
  width: 100%;
  border: none;
`;
const RegistBtn = styled.div`
  position: absolute;
  margin: 0.4vw 0.9vw;
  padding: 0.3vw;
  width: 3vw;
  left: 0;
  bottom: 0;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #d3d3d3;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  z-index: 99;
`;

const Close = styled.div`
  position: absolute;
  margin: 0.4vw 0.9vw;
  padding: 0.3vw;
  width: 3vw;
  right: 0;
  bottom: 0;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #d3d3d3;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  z-index: 999;
`;
export default Modal;
