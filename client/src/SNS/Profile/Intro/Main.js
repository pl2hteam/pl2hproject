import Modal from "../Modal";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import ImageSlider from "../../../Common/components/SNSImageSlider "
import { withRouter } from "react-router";
import Comment from "../Comment/Comment";

const { Meta } = Card;

const Main = (props) => {
  const [Posts, setPosts] = useState([]);
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

  const onSubmit = (event) => {
    // event.preventDefault();  // antd 자체 적용

    if (
      !profilecontent
    ) {
      return alert("fill all the fields first!");
    }

    const variables = {
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
  }; 
  
  const [openModal, setOpenModal] = useState(false);
  const [Index, setIndex] = useState();
  
  const PostArray = [];
  const renderCards = Posts.map((postData, index) => {
    PostArray.push(postData);

    if (postData || postData.HashtagId) {
      console.log(postData);
      return <Col lg={3} md={4} xs={8} key={index} onSubmit={onSubmit} onDoubleClick={() => {
        setIndex(index);
        setOpenModal(true);
      }}>
        <Card hoverable={true}>
          <article>
            <header>
              {/* 사용자 정보 */}
              <div class="profile-of-article">
                <img class="img-profile pic" src={`http://13.124.13.37:5000/${postData.UserId.image}`} alt=" 프로필 사진" />
                <span class="userID main-id point-span"><Meta description={`${postData.UserId.name}`} /></span>
              </div>

              {/* 추가 정보 *** */}
              <img class="icon-react icon-more" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="more" />

            </header>
            {openModal && (
              <Modal
                index={Index}
                modal={PostArray}
                setOpenModal={setOpenModal}
                openModal={openModal}
              />
            )}

            {/* 이미지 정보 */}
            <div class="main-image">
              <ImageSlider images={postData} />
            </div>

            {/* 좋아요, 댓글 더보기, 공유, 북마크 */}
            <div class="icons-react">
              <div class="icons-left">
                <img class="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트" />
                <img class="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="말풍선" />
              </div>
              <img class="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="북마크" />
            </div>
              {/* 설명 */}
              <div class="description">
              <Meta description={`${postData.UserId.name}`} /> : <Meta description={`${postData.content}`} />
              </div>

              {/* 댓글 란 Comment 안에 넣기 */}
            <Comment postData={postData} />

          </article >
        </Card >
      </Col >;
    } else {
      return null;
    }
  });

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
        <div>
          {renderCards}
        </div>
      )}
      <br />
      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={loadMoreHandler}>더보기</button>
        </div>
      )}
    </div>
  );
};

export default withRouter(Main);