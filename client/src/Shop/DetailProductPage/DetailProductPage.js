import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Row, Col, List } from "antd";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import { addToCart } from "../../Common/_actions/user_actions";
import { useDispatch } from "react-redux";
// import Subscriber from "./Sections/Subscriber";
import Comment from "./Sections/Comment";
import MainForm from "../MainForm/MainForm";

const DetailProductPage = (props) => {
  const dispatch = useDispatch();
  const pd_id = props.match.params.pd_id;
  const [Product, setProduct] = useState([]);
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    Axios.get(`/api/mongo/product/products_by_id?id=${pd_id}&type=single`)
    .then(
      (response) => {
        setProduct(response.data[0]);
      }
    );

    const postId = {
      postId: pd_id,
    };

    Axios.post('/api/mongo/product/getComments', postId)
    .then(
      (response) => {
        if (response.data.success) {
          setComments(response.data.comment);
        } else {
          alert('댓글을 가져오는 것을 실패했습니다.')
        }
      }
    )
  }, []);

  const refreshFunction = (newComment) => {
    setComments(Comments.concat(newComment))
  }

  const addToCartHandler = (pd_id) => {
    dispatch(addToCart(pd_id));
  };

  if (Product.seller) {
    return (
      <MainForm>
        <div className="postPage" style={{ width: "100%", padding: "3rem 4rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>{Product.pdName}</h1>
          </div>
          {/* <Subscriber /> */}
          <br />
          <Row gutter={[16, 16]}>
            <Col lg={12} xs={16}>
              <h1 style={{fontSize:'100px'}}>{Product.seller.name}</h1>
            </Col>
            <Col lg={12} xs={16}>
              <ProductImage detail={Product} />
            </Col>
            <Col lg={12} xs={24}>
              <ProductInfo addToCart={addToCartHandler} detail={Product} />
            </Col>
          </Row>
          <Comment refreshFunction={refreshFunction} commentLists={Comments} postId={pd_id} />
        </div>
      </MainForm>
    );
  } else {
    return (
      <MainForm>
        <div>....loading</div>
      </MainForm>
    )
  }
}

export default DetailProductPage;
