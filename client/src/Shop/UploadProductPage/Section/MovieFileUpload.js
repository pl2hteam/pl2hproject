import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Axios from "axios";

function FileUpload(props) {
  const [Images, setImages] = useState([]);
  const [VideoPath, setVideoPath] = useState("");
  const [Duration, setDuration] = useState("");

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    
    if (files[0].type == "video/mp4") {
      Axios.post("/api/mongo/product/uploadfiles", formData, config).then(
        (response) => {
          if (response.data.success) {
            console.log(response.data);

            let variable = {
              url: response.data.url,
              fileName: response.data.fileName,
            };

            setVideoPath(response.data.url);
            props.refreshImgFunction.updateVideoPath([
              ...VideoPath,
              response.data.url,
            ]);

            Axios.post("/api/mongo/product/thumbnail", variable).then(
              (response) => {
                console.log(response);
                if (response.data.success) {
                  setDuration(response.data.fileDuration);
                  props.refreshImgFunction.updateDuration([
                    ...Duration,
                    response.data.fileDuration,
                  ]);
                  setImages([...Images, response.data.url]);
                  props.refreshImgFunction.updateImages([
                    ...Images,
                    response.data.url,
                  ]);
                } else {
                  alert("썸내일 생성에 실패 했습니다.");
                }
              }
            );
          } else {
            alert("비디오 업로드를 실패했습니다.");
          }
        }
      );
    } else {
      Axios.post("/api/mongo/product/uploadImage", formData, config).then(
        (response) => {
          if (response.data.success) {
            setImages([...Images, response.data.image]);
            props.refreshImgFunction.updateImages([
              ...Images,
              response.data.image,
            ]);
          } else {
            alert("Failed to save the Image in Server");
          }
        }
      );
    }
  };

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);
    let newImages = [...Images];
    newImages.splice(currentIndex, 1);
    setImages(newImages);
    props.refreshImgFunction.updateImages(newImages);
  };

  console.log(props);

  return (
    <div style={{ display: "block", justifyContent: "space-between" }}>
      <div
        style={{
          display: "flex",
          width: "400px",
          height: "260px",
          overflowX: "scroll",
          margin: "0 0 10px 75px",
          border: "1px solid lightgray",
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:5000/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
      <div style={{ display: "block"}}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "130px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid lightgray",
              marginLeft: "200px",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            사진 등록
          </div>
        )}
      </Dropzone>
        </div>
    </div>
  );
}

export default FileUpload;
