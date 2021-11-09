import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Row, Col } from "antd";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import { addToCart } from "../../Common/_actions/user_actions";
import { useDispatch } from "react-redux";
function DetailProductPage(props) {
  const dispatch = useDispatch();
  const pdNumber = props.match.params.pdNumber;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(
      `/api/mongo/product/products_by_id?id=${pdNumber}&type=single`
    ).then((response) => {
      setProduct(response.data[0]);
    });
  }, []);

  const addToCartHandler = (pdNumber) => {
    dispatch(addToCart(pdNumber));
  };

  return (
    <div className="postPage" style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{Product.pdName}</h1>
      </div>

      <br />

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <ProductImage detail={Product} />
        </Col>
        <Col lg={12} xs={24}>
          <ProductInfo addToCart={addToCartHandler} detail={Product} />
        </Col>
      </Row>
    </div>
  );
}

export default DetailProductPage;
