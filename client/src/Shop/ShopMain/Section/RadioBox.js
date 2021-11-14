import React, { useState } from 'react';
import { Collapse, Radio } from 'antd';

const { Panel } = Collapse;

const RadioBox = (props) => {
  const [Value, setValue] = useState(0);

  const renderRadioBox = () => props.list && props.list.map(
    (value) => {
      return(
        <React.Fragment>
          <Radio key={value._id} value={value._id}>
            <span>{value.name}</span>
          </Radio>
        </React.Fragment>
      );
  })

  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleFilters(event.target.value);
  };

  return (
    <div>
      <Collapse defaultActiveKey={['1']}>
        <Panel header=" 가격 선택" key="1">
          <Radio.Group onChange={handleChange} value={Value}>
            {renderRadioBox()}
          </Radio.Group>
        </Panel>
      </Collapse>
    </div>
  )
}

export default RadioBox
