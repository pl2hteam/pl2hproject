// import React from "react";
import styled from "styled-components";
import Modal from "../Modal";
////////////////////////////////////////
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import ImageSlider from "../../../Common/components/SNSImageSlider "
import { withRouter } from "react-router";
import Comment from "../Comment/Comment";
import Feed from './feed.css'
////////////////////////////////////////
import { Typography, Button, Form, message, Input } from "antd";

/////////////

const Wrapper = styled.div`
  padding: 10px 0;
  font-family: serif;
  font-weight: bold;
  img {
    width: 100%;
    margin: 5px 0;
  }
  h2 {
    color: #a7a7a7;
    font-size: 1.2rem;
  }
  .at {
    color: #cec6a0;
    font-size: 0.9rem;
  }
  .warn {
    text-align: right;
    color: #d9d9d9;
    text-decoration: line-through;
    font-weight: bold;
    font-size: 0.85rem;
    font-style: italic;
  }
`;

const TxtWrapper = styled.div`
  padding: 40px;
  text-align: center;
  .txt {
    margin-bottom: 20px;
    color: #333;
    font-weight: normal;
  }
`;

const { Meta } = Card;

const Main = (props) => {
  const [Posts, setPosts] = useState([]);
  // const [Images, setImages] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(2);
  const [PostSize, setPostSize] = useState(0);

  // 상품목록 불러오기
  const getPosts = (body) => {
    Axios.post("/api/mysql/posts/read", body).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        if (body.loadMore) {
          setPosts([...Posts, ...response.data.postData]);
        } else {
          setPosts(response.data.postData);
        }
        setPosts([...Posts, ...response.data.postData]);
      } else {
        alert("Failed to fectch post datas");
      }
    });
  };


  const [profilecontent, setPostTitle] = useState("");

  const onPostTitle = (event) => {
    setPostTitle(event.currentTarget.value);
  };
  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !profilecontent

    ) {
      return alert("fill all the fields first!");
    }

    // console.log('props id 는 : ', props.user.userData._id);
    const variables = {
      //seller: user.userData._id,
      content: profilecontent,

    };

    Axios.post("/api/mysql/posts/write", variables)
      .then((response) => {
        console.log('props.user 는 : ', response);
        if (response.data.success) {

          alert("Product Successfully Uploaded");
          props.history.push("/sns");
        } else {
          console.log(response.data)
          alert("Failed to upload Product");
        }
      });
  };


  // 더보기 버튼
  const loadMoreHandler = () => {
    let skip = Skip + Limit;

    let variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,

    };

    getPosts(variables);
    setSkip(skip);
  }; const [openModal, setOpenModal] = useState(false);

  const renderCards = Posts.map((postData, index) => {




    if (postData || postData.HashtagId) {
      return <Col lg={3} md={4} xs={8} key={index} >
        <Card hoverable={true}>
          <article>

            <header>
              <div class="profile-of-article">
                {/* <img class="img-profile pic" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/28434316_190831908314778_1954023563480530944_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=srwTEwYMC28AX8gftqw&oh=98c7bf39e441e622c9723ae487cd26a0&oe=5F68C630" alt="dlwlrma님의 프로필 사진"/> */}
                <span class="userID main-id point-span"><Meta description={`${postData.UserName}`} /></span>
              </div>
              <img class="icon-react icon-more" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="more" onSubmit={onSubmit} onClick={() => {
                setOpenModal(true);
              }} />
            </header>
            <div class="main-image">
              <ImageSlider images={postData} />
            </div>
            <div class="icons-react">
              <div class="icons-left">
                <img class="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트" />
                <img class="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="말풍선" />
                <img class="icon-react" src="img/dm.png" alt="DM" />
              </div>
              <img class="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="북마크" />
            </div>


            <div class="reaction">
              <div class="liked-people">
                {/* <img class="pic" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/89296253_1521373131359783_504744616755462144_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=_9raiaB11CAAX_u7RhK&oh=c162d17b1570f31f94a1a28e19167609&oe=5F6C7A90" alt="johnnyjsuh님의 프로필 사진"/> */}
                <p><p class="point-span">johnnyjsuh</p>님 <span class="point-span">외 2,412,751명</span>이 좋아합니다</p>
              </div>
              <div class="description">
                <p> <Meta description={`111${postData.content}`} /> 🌱</p>
              </div>
              <div class="comment-section">
                <ul class="comments">
                  <li>
                    <span><span class="point-span userID">postmalone</span>내가 입으면 더 잘어울릴 것 같아</span>
                    <div>
                      <img class="comment-more" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="more" />
                      <div class="comment-like">
                        <img class="comment-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트" />
                        <img class="comment-heart-liked" src="img/liked.png" alt="좋아요된하트" />
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

              <Form >
                {/* DropZone */}


                <br />
                <br />
                <label>물품명</label>1
                <Input onChange={onPostTitle} value={profilecontent} />
                <br />


                <Button onClick={onSubmit}>Submit</Button>
              </Form>
              {/* <input id="input-comment" class="input-comment" type="text" placeholder="댓글 달기..." />
          <button type="submit" class="submit-comment" disabled>게시</button> */}
            </div>
          </article>
        </Card>
      </Col>;
    } else {
      return null;
    }
    console.log(postData);
    // console.log(Images.PostId);

  });

  // category 는 체크박스랑 라디오 박스를 나누기 위한 것

  // 텍스트 검색


  // default
  useEffect(() => {
    let variables = {
      skip: Skip,
      limit: Limit,
    };

    getPosts(variables);
  }, []);

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>커플 스타 그램</h2>
      </div>

      {/* 상품, 가격 필터 */}
      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}></Col>
        <Col lg={12} xs={24}></Col>
      </Row>



      {/* 등록된 상품이 0개면 "상품없다고 출력  */}
      {Posts.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>등록된 상품이 없읍니다</h2>
        </div>
      ) : (
        // 상품 있으면 목록 출력
        <div>  {openModal && (
          <Modal

            setOpenModal={setOpenModal}
            openModal={openModal}


          />
        )}
          {renderCards}
        </div>
      )}
      <br />
      {/* <Comment /> */}
      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}>더보기</button>
        </div>
      )}
    </div>
  );
};

export default withRouter(Main);