import styled from "styled-components";

export const UploadStyle = styled.div`
  .ant-form {
    top: 0px;
  }

  form {
    margin-left: 15vw;
  }

  textarea, 
  input[type = text], 
  input[type = number], 
  select,
  button  {
    background: transparent;
    border-color: RGBA(0,0,0,0.3);
    width: 80%;
    height: 2vw;
    margin:3px;
    border-radius: 10px;
  }

  input:focus, 
  textarea:focus, 
  select {
    outline: none;
    box-shadow: 0 0 0 1px RGBA(0,0,0,0.3);
  }
  
  input[type = text], input[type = number] {
    padding-left: 5px;
  }

  textarea {
    border: 1.9px solid;
    width: 90%;
    height: 5vw;
    margin-top: 10px;
    padding-top: 5px;
  }

  button {
    border: 2.1px solid RGBA(0,0,0,0.3);
    margin-top: 15px;
    margin-left: 120px;
    width: 170px;
    height: 40px;
  }

  button:hover {
    border: 3.5px solid RGBA(0,0,0,0.3);
  }

  .item {
    margin: 10px;
  }
`;