import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Axios from "axios";

const FileUpload = (props) => {
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

  return (
    <div
      className="dropzone_box"
      style={{ display: "block", justifyContent: "space-between" }}
    >
      <div className="dropzone-image_box">
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              className="dropzone-image_box-img"
              style={{ width: "100%", height: "240px" }}
              src={`http://3.34.51.7:5000/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
      <div>
        <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="add_photo_btn">사진 추가</div>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
}

export default FileUpload;
