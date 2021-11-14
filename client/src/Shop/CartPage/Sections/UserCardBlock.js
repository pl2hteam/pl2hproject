import React from "react";

function UserCardBlock(props) {
  // 유저 장바구니에서 상품이미지배열 찾아서
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
        <td>{product.price} 원</td>
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
            <th>상품사진</th>
            <th>주문수량</th>
            <th>상품가격</th>
            <th>
              그냥 구매하시지 굳이 장바구니에서 빼시려면 여기 있는 버튼 눌러서
              빼시던가
            </th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
