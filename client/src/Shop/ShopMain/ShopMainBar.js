import React, { useState, useEffect } from "react";
import { Col, Card, Row } from "antd";
import CheckBox from "./Section/CheckBox";
import { itemNumber } from "./Section/itemDatas";
import Radiobox from "./Section/RadioBox";
import { price } from "./Section/priceDatas";
import Axios from "axios";

const ShopMainBar = (props) => {
  const sendPdFilter = () => {
    props.getPdFilter(pdFilter);
  };

  // sendPdFilter();

  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(99999);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({
    itemNumber: [],
    price: [],
  });
  let pdFilter;
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
      console.log(Products);
      sendPdFilter();
    });
  };
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
    pdFilter = { Products, Skip, Limit, PostSize, Filters };
  };
  // default
  useEffect(() => {
    let variables = {
      skip: Skip,
      limit: Limit,
    };
    console.log(variables);
    getProducts(variables);
  }, []);

  return (
    <div>
      <button onClick={sendPdFilter}>실험</button>
      {/* 상품, 가격 필터 */}
      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <CheckBox
            list={itemNumber}
            handleFilters={(filters) => handleFilters(filters, "itemNumber")}
          />
        </Col>
        <Col lg={12} xs={24}>
          <Radiobox
            list={price}
            handleFilters={(filters) => handleFilters(filters, "price")}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ShopMainBar;
