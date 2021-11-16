import styled from "styled-components";

export const Wrapper = styled.div`
padding: 10px 0;
font-family: serif;
font-weight: bold;
img {
  width: 100%;
  margin: 5px 0;
}
h2 {
  color: #a7a7a7;
  font-size: 1.2rem;
}
.at {
  color: #cec6a0;
  font-size: 0.9rem;
}
.warn {
  text-align: right;
  color: #d9d9d9;
  text-decoration: line-through;
  font-weight: bold;
  font-size: 0.85rem;
  font-style: italic;
}
`;

export const TxtWrapper = styled.div`
padding: 40px;
text-align: center;
.txt {
  margin-bottom: 20px;
  color: #333;
  font-weight: normal;
}
`;