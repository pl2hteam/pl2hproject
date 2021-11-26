import React from "react";

const UserCardBlock = (props) => {
  const renderCartImage = (images) => {
    let image = images[0];
    return `http://3.34.51.7:5000/${image}`;
  };
  
  const renderItems = () =>
    props.products &&
    props.products.map((product) => (
      <tr key={product._id}>
        <td>
          <img
            style={{ width: "70px" }}
            alt="product"
            src={renderCartImage(product.images)}
          />
        </td>
        <td>{product.quantity} 개</td>
        <td>금화 {product.price}</td>
        <td>
          <button onClick={() => props.removeItem(product._id)}>Remove </button>{" "}
        </td>
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>아이템사진</th>
            <th>수량</th>
            <th>아이템가격</th>
            <th>주문제거</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
