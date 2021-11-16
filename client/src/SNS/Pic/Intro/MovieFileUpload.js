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
      Axios.post("/api/mysql/album/write", formData, config).then(
        (response) => {
          console.log(response);
          if (response.data.success) {
            console.log(response.data);

            let variable = {
              url: response.data.url,
              fileName: response.data.fileName,
            };

            setVideoPath(response.data.url);
            props.refresh.updateVideoPath([
              ...VideoPath,
              response.data.url,
            ]);

            Axios.post("/api/mysql/product/video/thumbnail", variable).then(
              (response) => {
                console.log(response);
                if (response.data.success) {
                  setDuration(response.data.fileDuration);
                  props.refresh.updateDuration([
                    ...Duration,
                    response.data.fileDuration,
                  ]);
                  setImages([...Images, response.data.url]);
                  props.refresh.updateImages([
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
      console.log("####################################");
      Axios.post("/api/mysql/album/uploadimage", formData, config).then(
        (response) => {
          console.log(response.data.image);
          console.log(props.refresh);
          if (response.data.success) {
            setImages([...Images, response.data.image]);
            props.refresh.updateImages([
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
    props.refresh.updateImages(newImages);
  };

  console.log(props);

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
    </div>
  );
}

export default FileUpload;