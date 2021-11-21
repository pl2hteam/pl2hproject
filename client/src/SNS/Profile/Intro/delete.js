import Axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

const Delete = (props) => {
  console.log(props);
  const onSubmit = (event) => {
    console.log(props, 9876);
    event.preventDefault();

    Axios.delete(`/api/mysql/posts/write/delete/${props.modal.index}`).then(
      (response) => {
        if (response.data.success) {
          console.log(props, 9876);
          window.location.replace("./profile");
        } else {
          alert("댓글을 저장하지 못했습니다.");
        }
      }
    );
  };
  return (
    <form style={{ display: "flex" }} onSubmit={onSubmit}>
      <button style={{ width: "20%", height: "37px" }} onClick={onSubmit}>
        삭제
      </button>
    </form>
  );
};

export default withRouter(Delete);
