const price = [
  {
    _id: 0,
    name: "금액 전체",
    array: [],
  },
  {
    _id: 1,
    name: "0 ~ 9,999원",
    array: [0, 9999],
  },
  {
    _id: 2,
    name: "10,000 ~ 49,999원",
    array: [10000, 49999],
  },
  {
    _id: 3,
    name: "50,000 ~ 99,999원",
    array: [50000, 99999],
  },
  {
    _id: 4,
    name: "100,000 ~ 299,999원",
    array: [100000, 299999],
  },
  {
    _id: 5,
    name: "30만원 이상",
    array: [300000, 1000000000],
  },
];

// const continents = [
//     {
//         "_id": 1,
//         "name": "Africa"
//     },
//     {
//         "_id": 2,
//         "name": "Europe"
//     },
//     {
//         "_id": 3,
//         "name": "Asia"
//     },
//     {
//         "_id": 4,
//         "name": "North America"
//     },
//     {
//         "_id": 5,
//         "name": "South America"
//     },
//     {
//         "_id": 6,
//         "name": "Australia"
//     },
//     {
//         "_id": 7,
//         "name": "Antarctica"
//     }
// ]

export {
  price,
  // continents
};
