import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Icon from '@ant-design/icons';
import Axios from "axios";

function FileUpload(props) {
  const [Images, setImages] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    console.log(files[0]);
    formData.append("file", files[0]);
    //save the Image we chose inside the Node Server
    Axios.post("/api/mongo/product/uploadImage", formData, config)
      .then(
        (response) => {
          console.log(response.data);
          if (response.data.success) {
            console.log(response.data);
            setImages([...Images, response.data.image]);
            // props.refreshFunction([...Images, response.data.image]);
          } else {
            alert("Failed to save the Image in Server");
          }
        }
      );
  };

  // 업로드 대기중인 상품이미지 클릭 시 삭제 함수
  const onDelete = (image) => {
    //     현재인덱스   = 선택한 이미지의 인덱스 번호 ex) 3장 중 2번째 이미지는 인덱스1
    const currentIndex = Images.indexOf(image);
    // newImages에 대기중인 이미지들을 담고
    let newImages = [...Images];
    // 선택한 인덱스번호의 이미지 한장을 날려버리기
    newImages.splice(currentIndex, 1);

    // 날리고 남은 이미지들을 useState로 갱신
    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Icon type="plus" style={{ fontSize: "3rem" }} />
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images.map((filename, index) => (
          <div onClick={() => onDelete(filename)}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:5000/${filename}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
