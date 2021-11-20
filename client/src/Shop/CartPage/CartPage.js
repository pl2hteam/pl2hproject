import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  removeCartItem,
  onSuccessBuy,
} from "../../Common/_actions/user_actions";
import UserCardBlock from "./Sections/UserCardBlock";
import { Result } from "antd";
import Paypal from "../../Common/components/Paypal";
import { CartStyle } from './style/cartstyle';
import { getCart } from "../../Common/_actions/user_actions";

const CartPage = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (user.userData) {
      if (user.userData.gender) {
        dispatch(getCart(user.userData.email))
          .then((response) => {
            let userCart = response.payload.user;

            let cartItems = [];
            if (userCart[0] && userCart[0].cart) {
              if (userCart[0].cart.length > 0) {
                userCart[0].cart.forEach((item) => {
                  cartItems.push(item.id);
                });
                dispatch(getCartItems(cartItems, userCart[0].cart)).then(
                  (response) => {
                    if (response.payload.length > 0) {
                      calculateTotal(response.payload);
                    }
                  }
                );
              }
            }
          });
      } else {
        let cartItems = [];
      
        if (user.userData && user.userData.cart) {
          if (user.userData.cart.length > 0) {
            user.userData.cart.forEach((item) => {
              cartItems.push(item.id);
            });
            dispatch(getCartItems(cartItems, user.userData.cart)).then(
              (response) => {
                if (response.payload.length > 0) {
                  calculateTotal(response.payload);
                }
              }
            );
          }
        }
      }
    } 
  }, [user.userData]);

  // 장바구니 총액 계산
  const calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.map((item) => {
      total += parseInt(item.price, 10) * item.quantity;
    });

    setTotal(total);
    setShowTotal(true);
  };

  // 장바구니에 있는 상품 제거
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
        cartDetail: user.cartDetail,
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
    <CartStyle>
      <div style={{ width: "85%", margin: "0 0 0 350px" }} className="cartBox">
        <h1>장바구니</h1>
        <div>
          <UserCardBlock products={user.cartDetail} removeItem={removeFromCart} />

          {ShowTotal ? (
            <div style={{ marginTop: "3rem" }}>
              <h2>총 금화 {Total}</h2>
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
              <p>담겨진 아이템이 없습니다</p>
            </div>
          )}
        </div>

        {/* Paypal Button */}
        {ShowTotal && (
          <Paypal
            toPay={Total}
            onSuccess={transactionSuccess}
            transactionError={transactionError}
            transactionCanceled={transactionCanceled}
          />
        )}
      </div>
    </CartStyle>
  );
}

export default CartPage;
