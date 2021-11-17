// import React from "react";
import styled from "styled-components";
import style from './css/style.css'
////////////////////////////////////////
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import ImageSlider from "../../../Common/components/SNSImageSlider "
import { withRouter } from "react-router";
import Modal from "../Modal"





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

const Grid = styled.div`
display : flex;
flex-direction: row;
`

const { Meta } = Card;

const Main = (props) => {
  const [Posts, setPosts] = useState([]);
  // const [Images, setImages] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(2);
  const [PostSize, setPostSize] = useState(0);

  // 상품목록 불러오기
  const getPosts = (body) => {
    Axios.post("/api/mysql/album/read", body).then((response) => {
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

    Axios.post("/api/mysql/album/write", variables)
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
  };

  const renderCards = Posts.map((postData, index) => {
    console.log(postData);
    // console.log(Images.PostId);
    return (
       
      <div class="pic">
             <div class="opacity-overlay">
          <Col lg={2} md={4} xs={8} key={index}>
        <Card hoverable={true}>
      



  

  <ImageSlider images={postData} />


 

        </Card>
      </Col>
      </div>
      <div class="icons">
   <i class="fa fa-heart">200m</i>
   <i class="fa fa-comment">2m</i>
    </div>
    </div>
      
    



    );
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
  const [openModal, setOpenModal] = useState(false);
  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>사 진 첩</h2>
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
        
        <div class="page">
       
       

        <ul class="profile-numbers responsive-profile">
            <li>
                <a href="#">
                    <span class="profile-posts">6</span>
                    posts
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="profile-followers">800B</span>
                    followers
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="profile-following">10</span>
                    following
                </a>
            </li>
        </ul>
       
        <div class="content-tabs inner-wrap">
            <div class="tabs">
                <a href="#">
                    <span class="tab-content">
                        <svg aria-label="Posts" class="posts" fill="#0095f6" height="24" viewBox="0 0 48 48" width="24">
                            <path clip-rule="evenodd" 
                                d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                                fill-rule="evenodd">
                            </path>
                        </svg>
                        <span class="tab-text">Posts</span>
                    </span>
                </a>
            </div>
            <div class="tabs">
                <a href="#">
                    <span class="tab-content">
                        <svg aria-label="Tagged" class="tagged" fill="#8e8e8e" height="12" viewBox="0 0 48 48" width="12">
                            <path d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z">                                
                            </path>
                        </svg>
                    </span>
                    <span class="tab-text">Tagged</span>
                </a>
            </div>
        </div>
        <div class="gallery-pics inner-wrap">
     

        <div class="pic-wrap"onSubmit={onSubmit} onDoubleClick={() => {
        setOpenModal(true);
      }}>
          
        {openModal && (
          <Modal
          
            setOpenModal={setOpenModal}
            openModal={openModal}
           
            
          />
        )}
          {renderCards}   
          
          
</div>
        </div>
  
   
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
