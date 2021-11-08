import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Col, Card, Row, Carousel } from "antd";
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Section/CheckBox';
import { itemNumber } from './Section/itemDatas';

const { Meta } = Card;

const ShopMainPage = () => {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(2);
  const [PostSize, setPostSize] = useState(0);
  const [Filters, setFilters] = useState({
    itemNumber: [],
    price: [],
  })

  /* 삼품 목록 표기 (미완) */
  const renderCards = Products.map((product, index) => {
    return (
      <React.Fragment key={index}>
        <Col lg={6} md={8} xs={24}
          key={index} // 단순히 에러를 문구를 없얘기 위해 넣음
        >
          <div style={{ position: 'relative' }}>
            <Card cover={<ImageSlider images={product.images}/>} >
              <Meta 
                title={product.title}
                description={`${product.price}`}
              />
            </Card>
          </div>
        </Col>
      </React.Fragment>
    )
  })

  /* 상품 목록 불러오기 */
  const getProducts = (body) => {
    Axios.post("/api/mongo/product/getProducts", body)
    .then(response => {
      if (response.data.success) {
        if(body.loadMore) {
          setProducts([...Products, ...response.data.productInfo]);
        } else {
          setProducts(response.data.productInfo);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("목록을 불러오는데 실패했습니다.");
      }
    })
  }

  /* 더보기 버튼 */
  const loadMoreHandler = () => {
    let skip = Skip + Limit;

    let variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
    }  

    getProducts(variables);
    setSkip(skip);
  }

  const showFilteredResults = (filters) => {
    let body = {
      skip: 0,    // 처음엔 아무 선택 없음
      limit: Limit,
      filters: filters
    }
    getProducts(body)
    setSkip(0)
  }

  // category 는 체크박스랑 라디오 박스를 나누기 위한 것
  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };
    newFilters[category] = filters;
    showFilteredResults(newFilters);
  }

  useEffect(() => {
    let variables = {
      skip: Skip,
      limit: Limit,
    }  
    
    getProducts(variables);
  }, [])

  console.log(itemNumber);
  return (
    <div style={{ width:'75%', margin: '3rem auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>상품 메인 화면</h2>
      </div>

      <CheckBox 
        list={itemNumber} 
        handleFilters={filters => handleFilters(filters, "itemNumber")} 
      />


      <Row gutter={[16, 16]}>
        {renderCards}
      </Row>

      <br />

      {PostSize >= Limit && 
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={loadMoreHandler}>더보기</button>
        </div>
      }
    </div>
  )
};

export default ShopMainPage;