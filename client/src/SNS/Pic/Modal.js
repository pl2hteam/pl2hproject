import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import './Intro/css/feed.css'

const Modal = (props) => {
  const userInfo = useSelector(state => state.user);
  const [Img, setImg] = useState([]);

  useEffect(() => {
    setImg(props.modal);
  }, [])
  
  const {
    setOpenModal,
  } = props;

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
              src={`http://3.34.51.7:5000/${Img[props.index]}`}
              alt=""
            />
          </div>
          <div className="main-reaction_box">
            <header>
              <div class="profile-of-article">
                <img class="img-profile pic" src={`http://3.34.51.7:5000/${userInfo.userData.image}`} />
                <span class="userID main-id point-span">{userInfo.userData.name}</span>
              </div>
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
            </div>
          </div>
        </article>
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