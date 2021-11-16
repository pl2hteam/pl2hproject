import styled from "styled-components";

export const ShopFont = styled.div`
  @font-face {
    font-family: "Maplestory";
    src: url("https://cdn.jsdelivr.net/gh/webfontworld/NEXONGothic/MaplestoryLight.woff2")
      format("woff2");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  * {
    font-family: "Maplestory";
  }
`;
