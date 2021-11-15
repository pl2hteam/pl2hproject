import React from "react";

function UserCardBlock(props) {
  // 유저 장바구니에서 상품이미지배열 찾아서
  console.log(props);
  const renderCartImage = (images) => {
    // 해당 상품의 첫번째 배열의 사진을 image 변수에 담아
    let image = images[0];
    // 두둥등장
    return `http://localhost:5000/${image}`;
  };
  // 장바구니 목록 뿌리기
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
