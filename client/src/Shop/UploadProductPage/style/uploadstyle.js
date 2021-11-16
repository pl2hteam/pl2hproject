import styled from "styled-components";

export const UploadStyle = styled.div`
  .ant-form {
    top: 0px;
  }

  form {
    margin-left: 15vw;
  }

  input[type = text] {
    background: transparent;
    border-color: RGBA(0,0,0,0.3);
    width: 80%;
    height: 2vw;
    margin:3px;
    border-radius: 10px;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 0 1px RGBA(0,0,0,0.3);
  }
`;
