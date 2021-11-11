import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Row, Col, List } from "antd";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import { addToCart } from "../../Common/_actions/user_actions";
import { useDispatch } from "react-redux";
import Subscriber from "./Sections/Subscriber";

function DetailProductPage(props) {
  const dispatch = useDispatch();
  const pd_id = props.match.params.pd_id;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`/api/mongo/product/products_by_id?id=${pd_id}&type=single`)
    .then(
      (response) => {
        setProduct(response.data[0]);
        console.log(response.data[0]);
      }
    );
  }, []);

  const addToCartHandler = (pd_id) => {
    dispatch(addToCart(pd_id));
  };

  if (Product.seller) {
    return (
      <div className="postPage" style={{ width: "100%", padding: "3rem 4rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{Product.pdName}</h1>
        </div>
        <Subscriber />
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
      </div>
    );
  } else {
    return (
      <div>....loading</div>
    )
  }
}

export default DetailProductPage;
