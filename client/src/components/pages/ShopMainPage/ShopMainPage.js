import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Col, Card, Row, Carousel } from "antd";
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from './Section/CheckBox';
import { itemNumber } from './Section/Datas';

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


// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// 
// import ImageSlider from "../../utils/ImageSlider";
// import CheckBox from "./Sections/CheckBox";
// import RadioBox from "./Sections/RadioBox";
// import { itemNumber, price } from "./Sections/Datas";
// import SearchFeature from "./Sections/SearchFeature";

// const { Meta } = Card;

// const ShopMainPage = () => {
//   const [Products, setProducts] = useState([]);
//   const [Skip, setSkip] = useState(0);
//   const [Limit, setLimit] = useState(8);
//   const [PostSize, setPostSize] = useState();
//   const [SearchTerms, setSearchTerms] = useState("");

//   const [Filters, setFilters] = useState({
//     continents: [],
//     price: [],
//   });

//   useEffect(() => {
//     const variables = {
//       skip: Skip,
//       limit: Limit,
//     };

//     getProducts(variables);
//   }, []);

//   const getProducts = (variables) => {
//     Axios.post("/api/mongo/product/getProducts", variables)
//       .then((response) => {
//         if (response.data.success) {
//           if (variables.loadMore) {
//             setProducts([...Products, ...response.data.products]);
//           } else {
//             setProducts(response.data.products);
//           }
//           setPostSize(response.data.postSize);
//         } else {
//           alert(" 목록울 가져오는데 실패했습니다. ");
//         }
//       });
//   };

//   const onLoadMore = () => {
//     let skip = Skip + Limit;

//     const variables = {
//       skip: skip,
//       limit: Limit,
//       loadMore: true,
//       filters: Filters,
//       searchTerm: SearchTerms,
//     };
//     getProducts(variables);
//     setSkip(skip);
//   };

//   const renderCards = Products.map((product, index) => {
//     return (
//       <Col lg={6} md={8} xs={24}>
//         <Card
//           hoverable={true}
//           cover={
//             <a href={`/product/${product._id}`}>
//               {" "}
//               <ImageSlider images={product.images} />
//             </a>
//           }
//         >
//           <Meta pdName={product.pdName} description={`${product.price} 원`} />
//         </Card>
//       </Col>
//     );
//   });

//   const showFilteredResults = (filters) => {
//     const variables = {
//       skip: 0,
//       limit: Limit,
//       filters: filters,
//     };
//     getProducts(variables);
//     setSkip(0);
//   };

//   const handlePrice = (value) => {
//     const data = price;
//     let array = [];

//     for (let key in data) {
//       if (data[key]._id === parseInt(value, 10)) {
//         array = data[key].array;
//       }
//     }
//     console.log("array", array);
//     return array;
//   };

//   const handleFilters = (filters, category) => {
//     const newFilters = { ...Filters };

//     newFilters[category] = filters;

//     if (category === "price") {
//       let priceValues = handlePrice(filters);
//       newFilters[category] = priceValues;
//     }

//     console.log(newFilters);

//     showFilteredResults(newFilters);
//     setFilters(newFilters);
//   };

//   const updateSearchTerms = (newSearchTerm) => {
//     const variables = {
//       skip: 0,
//       limit: Limit,
//       filters: Filters,
//       searchTerm: newSearchTerm,
//     };

//     setSkip(0);
//     setSearchTerms(newSearchTerm);

//     getProducts(variables);
//   };

//   return (
//     <div style={{ width: "75%", margin: "3rem auto" }}>
//       <div style={{ textAlign: "center" }}>
//         <h2>
//           {" "}
//           Let's Travel Anywhere{" "}
//         </h2>
//       </div>

//       {/* Filter  */}

//       <Row gutter={[16, 16]}>
//         <Col lg={12} xs={24}>
//           <CheckBox
//             list={continents}
//             handleFilters={(filters) => handleFilters(filters, "continents")}
//           />
//         </Col>
//         <Col lg={12} xs={24}>
//           <RadioBox
//             list={price}
//             handleFilters={(filters) => handleFilters(filters, "price")}
//           />
//         </Col>
//       </Row>

//       {/* Search  */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "flex-end",
//           margin: "1rem auto",
//         }}
//       >
//         <SearchFeature refreshFunction={updateSearchTerms} />
//       </div>

//       {Products.length === 0 ? (
//         <div
//           style={{
//             display: "flex",
//             height: "300px",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <h2>No post yet...</h2>
//         </div>
//       ) : (
//         <div>
//           <Row gutter={[16, 16]}>{renderCards}</Row>
//         </div>
//       )}
//       <br />
//       <br />

//       {PostSize >= Limit && (
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <button onClick={onLoadMore}>Load More</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShopMainPage;
