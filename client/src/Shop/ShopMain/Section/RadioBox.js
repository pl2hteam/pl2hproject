import React, { useState } from "react";
import { Collapse, Radio } from "antd";

const { Panel } = Collapse;

const RadioBox = (props) => {
  const [Value, setValue] = useState(0);

  const renderRadioBox = () =>
    props.list &&
    props.list.map((value) => {
      return (
        <React.Fragment>
          <div>
            <Radio key={value._id} value={value._id}>
              <span style={{ fontSize: "0.8rem" }}>{value.name}</span>
            </Radio>
          </div>
        </React.Fragment>
      );
    });

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleFilters(event.target.value);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Collapse defaultActiveKey={["0"]}>
        <Radio.Group onChange={handleChange} value={Value}>
          <div style={{ marginBottom: "10px", textAlign: "center" }}>
            <span style={{ fontSize: "1.3rem", textAlign: "center" }}>
              가격대 선택
            </span>
          </div>
          {renderRadioBox()}
        </Radio.Group>
      </Collapse>
    </div>
  );
};

export default RadioBox;
