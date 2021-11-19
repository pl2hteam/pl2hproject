import React ,{useState,useEffect} from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import {withRouter} from "react-router-dom"

const List = ()=>{


    const [Posts, setPosts] = useState([]);
  
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
    // 더보기 버튼
  const [openModal, setOpenModal] = useState(false);
   
    const renderCards = Posts.map((postData, index) => {
      
      console.log(postData,555555555);
    
      return (
         
       <button>{postData.Image.HashtagId}</button>
      
  
  
  
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
    const userInfo = useSelector(state => state.user);
    return (
      <div style={{ width: "75%", margin: "3rem auto" }}>
        <div style={{ textAlign: "center" }}>
          <h2>사 진 첩</h2>
        </div>
      
  
  
  
        {/* 등록된 상품이 0개면 "상품없다고 출력  */}
        {userInfo.userData.couple_code === "9999"  ? (
          <div
            style={{
              display: "flex",
              height: "300px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>커플이 아닙니다 사진을 못봐요</h2>
          </div>
        ) : (
          
        <div>{renderCards}</div>
        )}
        <br />
        {/* <Comment /> */}
      </div>
    );


}
export default withRouter(List);