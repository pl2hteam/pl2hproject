import styled from "styled-components";

export const UploadStyle = styled.div`
  .ant-form {
    justify-content: space-between;
    top: 0px;
  }
  .ant-btn {
    color: rgb(40, 45, 78);
    margin: 0;
    width: 100%;
    background-color: rgb(6, 214, 160);
    transition-duration: 0.3s;
    font-weight: bold;
  }
  .ant-btn:hover {
    border: transparent;
    background-color: rgb(81, 226, 189);
  }
  .title {
    font-size: 2.5rem;
    text-align: center;
    color: white;
    margin-bottom: 50px;
  }
  textarea,
  input[type="text"],
  input[type="number"],
  select,
  button {
    border-color: white;
    width: 100%;
    height: 3vh;
    margin-top: 5px;
    border-radius: 10px;
    color: white;
    resize: none;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  input[type="text"],
  input[type="number"] {
    padding-left: 5px;
  }

  textarea {
    border: 1.9px solid;
    height: 20vh;
    max-height: 20vh;
    padding-top: 5px;
  }

  button {
    border: 2.1px solid transparent;
    margin-top: 15px;
    margin-left: 180px;
    width: 170px;
    height: 40px;
  }

  button:hover,
  .add_photo_btn:hover {
    border: 3.5px solid rgb(6, 214, 160);
  }

  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .dropzone_box {
    display: flex;
  }
  .dropzone-image_box {
    background-color: rgb(84, 92, 143);
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: 270px;
    max-height: calc(100vh - 400px);
    border: solid 1px white;
    border-bottom: none;
    overflow: auto;
  }
  .dropzone-image_box::-webkit-scrollbar {
    width: 10px;
  }
  .dropzone-image_box::-webkit-scrollbar-thumb {
    background-color: #2f3542;
  }
  .dropzone-image_box::-webkit-scrollbar-track {
    background-color: grey;
  }
  .ant-form-horizontal {
    display: flex;
  }
  .upload-item-list {
    width: 300px;
  }
  input,
  select,
  .ant-input {
    width: 100%;
    background: none;
    background-color: rgb(84, 92, 143);
  }
  .add_photo_btn {
    width: 100%;
    border: white solid 3.5px;
    text-align: center;
    height: 2rem;
    padding: 4px;
  }
`;
