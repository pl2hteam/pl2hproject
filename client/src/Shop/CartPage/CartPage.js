import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCartItems,
  removeCartItem,
  onSuccessBuy,
} from "../../Common/_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import { Result, Empty } from "antd";
import Axios from "axios";
// import Paypal from '../../utils/Paypal';

function CartPage(props) {
  const dispatch = useDispatch();
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let cartItems = [];
    //
    if (props.user.userData && props.user.userData.cart) {
      // 장바구니에 담은게 있으면 실행
      if (props.user.userData.cart.length > 0) {
        // DB에 있는 user 가 담아둔 상품들을 forEach 로
        props.user.userData.cart.forEach((item) => {
          // cartItems 배열에 때려넣음
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          (response) => {
            if (response.payload.length > 0) {
              calculateTotal(response.payload);
            }
          }
        );
      }
    }
  }, [props.user.userData]);

  const calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.map((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    setTotal(total);
    setShowTotal(true);
  };

  const removeFromCart = (productId) => {
    dispatch(removeCartItem(productId)).then((response) => {
      if (response.payload.cartDetail.length <= 0) {
        setShowTotal(false);
      } else {
        calculateTotal(response.payload.cartDetail);
      }
    });
  };

  const transactionSuccess = (data) => {
    dispatch(
      onSuccessBuy({
        cartDetail: props.user.cartDetail,
        paymentData: data,
      })
    ).then((response) => {
      if (response.payload.success) {
        setShowSuccess(true);
        setShowTotal(false);
      }
    });
  };

  const transactionError = () => {
    console.log("Paypal error");
  };

  const transactionCanceled = () => {
    console.log("Transaction canceled");
  };

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h1>장바구니</h1>
      <div>
        <UserCardBlock
          products={props.user.cartDetail}
          removeItem={removeFromCart}
        />

        {ShowTotal ? (
          <div style={{ marginTop: "3rem" }}>
            <h2>
              총 상품 금액 : {Total} 원 밖에 안합니다. 얼른 더 담으시고
              구매해주세요.
            </h2>
          </div>
        ) : ShowSuccess ? (
          <Result status="success" title="Successfully Purchased Items" />
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <br />
            <Empty description={false} />
            <p>장바구니에 담긴 상품이 달랑 한 개도 없읍니다.</p>
          </div>
        )}
      </div>

      {/* Paypal Button */}

      {/* {ShowTotal && (
        <Paypal
          toPay={Total}
          onSuccess={transactionSuccess}
          transactionError={transactionError}
          transactionCanceled={transactionCanceled}
        />
      )} */}
    </div>
  );
}

export default CartPage;
