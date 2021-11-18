import React, { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";

const ProductInfo = (props) => {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <div>
      <div>
        <div>금화 : {props.detail.price.toLocaleString("ko-KR")}</div>
        <div>브랜드 : {Product.brand}</div>
        <div> 수량 : {Product.quantity}</div>
        {/* <div> {Product.seller}</div> */}
        <div> 설명 : {Product.description}</div>
      </div>

      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          shape="round"
          type="danger"
          onClick={addToCarthandler}
        >
          장바구니 추가
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
