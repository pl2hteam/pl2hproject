import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";
import { addToCart } from "../../Common/_actions/user_actions";
import { useDispatch } from "react-redux";
import Comment from "./Sections/Comment";
import "./DetailProductPage.css";

const DetailProductPage = (props) => {
  const dispatch = useDispatch();
  const pd_id = props.info.match.params.pd_id;
  const [Product, setProduct] = useState([]);
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    Axios.get(`/api/mongo/product/products_by_id?id=${pd_id}&type=single`).then(
      (response) => {
        setProduct(response.data[0]);
      }
    );

    const postId = {
      postId: pd_id,
    };

    Axios.post("/api/mongo/product/getComments", postId).then((response) => {
      if (response.data.success) {
        setComments(response.data.comment);
      } else {
        alert("댓글을 가져오는 것을 실패했습니다.");
      }
    });
  }, []);

  const refreshFunction = (newComment) => {
    setComments(Comments.concat(newComment));
  };

  const addToCartHandler = (pd_id) => {
    dispatch(addToCart(pd_id));
    alert("장바구니에 담겼습니다.");
  };

  if (Product.seller) {
    return (
      <div className="postPage" style={{ width: "100%" }}>
        <div className="postPage-content">
          <ProductImage detail={Product} />
          <ProductInfo addToCart={addToCartHandler} detail={Product} />
        </div>
        <Comment
          refreshFunction={refreshFunction}
          commentLists={Comments}
          postId={pd_id}
        />
      </div>
    );
  } else {
    return <div>....loading</div>;
  }
};

export default DetailProductPage;
