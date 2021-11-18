import React from "react";
import { Link } from "react-router-dom";
import "./EmptyPage.css";

const EmptyPage = () => {
  return (
    <div className="pl2h-main">
      <Link to="/sns">
        <button className="link_btn sns">Go to SNS</button>
      </Link>

      <div className="link_btn-line"></div>

      <Link to="/shop">
        <button className="link_btn shop">Go to Shop</button>
      </Link>
    </div>
  );
};

export default EmptyPage;
