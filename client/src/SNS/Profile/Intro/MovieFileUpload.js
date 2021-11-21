import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Axios from "axios";
import Icon from "@ant-design/icons/lib/components/Icon";

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
    console.log(files);

    if (files[0].type == "video/mp4") {
      Axios.post("/api/mysql/posts/write", formData, config).then(
        (response) => {
          console.log(response);
          if (response.data.success) {
            console.log(response.data);

            let variable = {
              url: response.data.url,
              fileName: response.data.fileName,
            };

            setVideoPath(response.data.url);
            props.refresh.updateVideoPath([...VideoPath, response.data.url]);

            Axios.post("/api/mysql/product/thumbnail", variable).then(
              (response) => {
                console.log(response);
                if (response.data.success) {
                  setDuration(response.data.fileDuration);
                  props.refresh.updateDuration([
                    ...Duration,
                    response.data.fileDuration,
                  ]);
                  setImages([...Images, response.data.url]);
                  props.refresh.updateImages([...Images, response.data.url]);
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
      Axios.post("/api/mysql/posts/uploadimage", formData, config).then(
        (response) => {
          if (response.data.success) {
            setImages([...Images, response.data.image]);
            props.refresh.updateImages([...Images, response.data.image]);
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
    props.refresh.updateImages(newImages);
  };

  console.log(props);

  return (
    <div
      className="sns-dropzone_box"
      style={{ display: "block", justifyContent: "space-between" }}
    >
      <div className="sns-dropzone-image_box">
        {Images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              className="sns-dropzone-image_box-img"
              style={{ width: "300px", height: "240px" }}
              src={`http://13.124.13.37:5000/${image}`}
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
              <div className="sns-add_photo_btn">사진 추가</div>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
}

export default FileUpload;
