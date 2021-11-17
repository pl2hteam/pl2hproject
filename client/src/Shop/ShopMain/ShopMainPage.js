import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row } from "antd";
import CheckBox from "./Section/CheckBox";
import { itemNumber } from "./Section/itemDatas";
import Radiobox from "./Section/RadioBox";
import { price } from "./Section/priceDatas";
import SearchFeature from "./Section/SearchFeature";
import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";
import "./ShopMainPage.css";
import acorn from "../images/acorn.png";

const { Meta } = Card;

const ShopMainPage = (pdFilter) => {
  console.log(pdFilter);
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(2);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({
    itemNumber: [],
    price: [],
  });
  const [SearchTerm, setSearchTerm] = useState("");

  // 상품목록 불러오기
  const getProducts = (body) => {
    Axios.post("/api/mongo/product/getProducts", body).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        if (body.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  // 더보기 버튼
  const loadMoreHandler = () => {
    let skip = Skip + Limit;

    let variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      filters: Filters,
      searchTerm: SearchTerm,
    };

    getProducts(variables);
    setSkip(skip);
  };

  const renderCards = Products.map((product, index) => {
    return (
      <div className="shop-main-content-item_box">
        <a href={`/shop/product/${product._id}`}>
          <img
            className="shop-main-content-item_box-img"
            src={`http://localhost:5000/${product.images[0]}`}
            alt="productImage"
          />
          <div className="shop-main-content-item_box-info">
            <div className="shop-main-content-item_box-info-name">
              {product.pdName}
            </div>
            <div className="shop-main-content-item_box-info-price">
              <img className="acorn" src={acorn} alt="money" />
              {product.price.toLocaleString("ko-KR")}
            </div>
          </div>
        </a>
      </div>
    );
  });

  const showFilteredResults = (filters) => {
    let body = {
      skip: 0, // 처음엔 아무 선택 없음
      limit: Limit,
      filters: filters,
    };
    getProducts(body);
    console.log(body);
    setSkip(0);
  };

  // 라디오버튼 검색
  const handlePrice = (value) => {
    const data = price;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  // category 는 체크박스랑 라디오 박스를 나누기 위한 것
  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
      console.log(newFilters);
    }

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  // // 텍스트 검색
  // const updateSearchTerm = (newSearchTerm) => {
  //   let body = {
  //     skip: 0,
  //     limit: Limit,
  //     filters: Filters,
  //     searchTerm: newSearchTerm,
  //   };

  //   setSkip(0);
  //   setSearchTerm(newSearchTerm);
  //   getProducts(body);
  // };

  // default
  useEffect(() => {
    let variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, []);

  return (
    <div>
      <div className="shop-main-title">
        <h1 style={{ fontSize: "2rem" }}>상점</h1>
      </div>
      <div className="shop-main">
        {/* 상품, 가격 필터 */}
        <div className="shop-main-sidebar">
          <div>
            <CheckBox
              list={itemNumber}
              handleFilters={(filters) => handleFilters(filters, "itemNumber")}
            />
          </div>
          <div>
            <Radiobox
              list={price}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
          </div>
        </div>
        <div className="shop-main-content">
          {/* 검색란 */}
          {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "1rem auto",
        }}
      >
        <SearchFeature refreshFunction={updateSearchTerm} />
      </div> */}

          {/* 등록된 상품이 0개면 "상품없다고 출력  */}
          {Products.length === 0 ? (
            <div className="no_item">
              <h2>등록된 아이템이 없읍니다</h2>
            </div>
          ) : (
            // 상품 있으면 목록 출력
            <div className="shop-main-content-item_list">{renderCards}</div>
          )}

          {PostSize >= Limit && (
            <div className="load_more">
              <button onClick={loadMoreHandler}>더보기</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopMainPage;
