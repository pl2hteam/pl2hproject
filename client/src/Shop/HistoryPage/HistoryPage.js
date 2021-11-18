import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HistoryStyle } from "./style/historystyle";
import { getHistory } from "../../Common/_actions/user_actions";

import Moment from "react-moment";

function HistoryPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  let userData = {};
  useEffect(() => {
    if (user.userData) {
      if (user.userData.gender) {
        dispatch(getHistory(user.userData.email))
          .then((response) => {
            console.log(response);
          });
          // .then((response) => {
          //   let userCart = response.payload.cart;

          //   let cartItems = [];
          //   if (userCart && userCart.cart) {
          //     if (userCart.cart.length > 0) {
          //       userCart.cart.forEach((item) => {
          //         cartItems.push(item.id);
          //       });
          //       dispatch(getCartItems(cartItems, userCart.cart)).then(
          //         (response) => {
          //           if (response.payload.length > 0) {
          //             calculateTotal(response.payload);
          //           }
          //         }
          //       );
          //     }
          //   }
          // });
      } else {
        userData = user.userData;
      }
    } 
  }, [])

  return (
    <HistoryStyle>
      <div style={{ width: "80%", margin: "0 0 0 200px" }}>
        <div style={{ textAlign: "center" }}>
          <h1>구매내역</h1>
        </div>
        <br />

        <table>
          <thead>
            <tr>
              <th>상품</th>
              <th>가격</th>
              <th>수량</th>
              <th>구매일자</th>
            </tr>
          </thead>

          <tbody>
            {userData &&
              userData.history &&
              userData.history.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>

                  <td>
                    <Moment format="YYYY-MM-DD">{item.dateOfPurchase}</Moment>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </HistoryStyle>
  );
}

export default HistoryPage;
