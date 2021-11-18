import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Main from './Intro/Main'
import Feed from'./Intro/css/feed.css'
import ImageSlider from '../../Common/components/SNSImageSlider ';
import { useSelector } from 'react-redux';


import { Typography, Button, message, Input } from "antd";
const Modal = (props) => {
  console.log(props,31313131);
  const user = useSelector(state => state.user)
  const {
    
    setOpenModal,
  
  } = props;

  console.log(props)
  return (
    <div className="feed_one">
    <Form>
      <Close
        onClick={() => {
          setOpenModal(false);
        }}
      >
        닫기
      </Close>
      <article>
        <div class="main-image_box">
          <img
            class="pic"
            src={`http://localhost:5000/${props.modal}`} 
            alt=""
          />
        </div>
        <div className="main-reaction_box">
          <header>
            <div class="profile-of-article">
              <img class="img-profile pic" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/28434316_190831908314778_1954023563480530944_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=srwTEwYMC28AX8gftqw&oh=98c7bf39e441e622c9723ae487cd26a0&oe=5F68C630" alt="dlwlrma님의 프로필 사진"/>
              {/* <span class="userID main-id point-span"><Meta description={`${props.imges}`} /></span> */}
            </div>
            {/* <img
              class="icon-react icon-more"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              alt="more"
            /> */}
          </header>

          <div class="icons-react">
            <div class="icons-left">
              <img
                class="icon-react"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="하트"
              />
              <img
                class="icon-react"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                alt="말풍선"
              />
              <img class="icon-react" src="img/dm.png" alt="DM" />
            </div>
            <img
              class="icon-react"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
              alt="북마크"
            />
          </div>

          <div class="reaction">
            <div class="liked-people">
              <p>
                <p class="point-span">johnnyjsuh</p>님{" "}
                <span class="point-span">외 2,412,751명</span>이 좋아합니다
              </p>
            </div>
            <div class="description">
              {/* <p> <Meta description={`111${postData.content}`} /> 🌱</p> */}
            </div>
            <div class="comment-section">
              <ul class="comments">
                <li>
                  <span>
                    <span class="point-span userID">postmalone</span>내가
                    입으면 더 잘어울릴 것 같아
                  </span>
                  <div>
                    <img
                      class="comment-more"
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt="more"
                    />
                    <div class="comment-like">
                      <img
                        class="comment-heart"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                        alt="하트"
                      />
                      <img
                        class="comment-heart-liked"
                        src="img/liked.png"
                        alt="좋아요된하트"
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <div class="time-log">
                <span>32분 전</span>
              </div>
            </div>
          </div>
          <div class="comment">
  
            {/* <input id="input-comment" class="input-comment" type="text" placeholder="댓글 달기..." />
     <button type="submit" class="submit-comment" disabled>게시</button> */}
          </div>
        </div>
      </article>
      {/* <Delete modal={props} /> */}
    </Form>
  </div>

   
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
