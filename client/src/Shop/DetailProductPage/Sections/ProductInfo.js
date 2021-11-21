import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style/ProductInfo.css";

const ProductInfo = (props) => {
  const user = useSelector(state => state.user);
  const [Product, setProduct] = useState({});
  const [Gender, setGender] = useState("");

  useEffect(() => {
    setProduct(props.detail);
    if(user.userData) {
      setGender(user.userData.gender);
    }
  }, [props.detail, user.userData]);

  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <div>
      <div className="Explanation">
        <div>금화 : {props.detail.price.toLocaleString("ko-KR")}</div>
        <div>브랜드 : {Product.brandName}</div>
        <div>설명 : {Product.description}</div>
      </div>
      {Gender !== 0 &&
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
      }
    </div>
  );
};

export default ProductInfo;
