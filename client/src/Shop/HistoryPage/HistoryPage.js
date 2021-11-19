import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HistoryStyle } from "./style/historystyle";
import { getHistory } from "../../Common/_actions/user_actions";

import Moment from "react-moment";

function HistoryPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [History, setHistory] = useState([]);
  
  let userData = {};
  useEffect(() => {
    if (user.userData) {
      if (user.userData.gender) {
        console.log(user.userData.email);
        dispatch(getHistory(user.userData.email))
          .then((response) => {
            setHistory(response.payload.user.history)
          });
      } else {
        userData = user.userData;
      }
    } 
  }, [user.userData]);

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
            {History && History.map((item) => {
              return <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>

                <td>
                  <Moment format="YYYY-MM-DD">{item.dateOfPurchase}</Moment>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </HistoryStyle>
  );
}

export default HistoryPage;
