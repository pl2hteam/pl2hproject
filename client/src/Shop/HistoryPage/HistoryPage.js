import React from "react";
import { useSelector } from "react-redux";
import { HistoryStyle } from "./style/historystyle";

import Moment from "react-moment";

function HistoryPage() {
  const user = useSelector((state) => state.user);

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
            {user.userData &&
              user.userData.history &&
              user.userData.history.map((item) => (
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
