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
      <Descriptions title="Product Info">
        <Descriptions.Item label="Price">
          가격 : {Product.price} 원
        </Descriptions.Item>
        <Descriptions.Item label="Brand">
          브랜드 : {Product.brand}
        </Descriptions.Item>
        <Descriptions.Item label="quantity">
          {" "}
          수량 : {Product.quantity}
        </Descriptions.Item>
        {/* <Descriptions.Item label="Seller"> {Product.seller}</Descriptions.Item> */}
        <Descriptions.Item label="Description">
          {" "}
          상품설명 : {Product.description}
        </Descriptions.Item>
      </Descriptions>
      {/* <div className="price">가격 : {Product.price} 원</div>
      <div className="brand">브랜드명 : {Product.brand}</div>
      <div className="quantity">수량 : {Product.quantity}</div>
      <div className="seller">판매자 : {Product.seller}</div>
      <div className="description">상세정보 : {Product.description}</div> */}

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
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
