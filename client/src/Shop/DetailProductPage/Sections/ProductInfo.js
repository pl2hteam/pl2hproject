import React, { useEffect, useState } from "react";
import "./style/ProductInfo.css";

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
      <div className="Explanation">
        <div>금화 : {props.detail.price.toLocaleString("ko-KR")}</div>
        <div>브랜드 : {Product.brand}</div>
        <div>설명 : {Product.description}</div>
      </div>
      
      <div className="Cart-Box">
        <button
          className="Cart-Button"
          size="large"
          shape="round"
          type="danger"
          onClick={addToCarthandler}
        >
          장바구니 추가
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
