import React, { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";

const ProductInfo = (props) => {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  console.log(props.detail._id);
  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Price">
          금화 : {Product.price}
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
          설명 : {Product.description}
        </Descriptions.Item>
      </Descriptions>

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
