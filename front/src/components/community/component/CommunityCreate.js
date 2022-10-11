import React, { useState } from "react";
import { DatePicker, Input, Select } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import {
  TitleAlign,
  AllContentAlign,
  CommunityFormSecond,
} from "../styledComponents/CommunityCreateStyled";
import TextArea from "antd/lib/input/TextArea";
import { RegisterGreenBtn } from "../../common/button/IconBtn";
import { Form } from "react-router-dom";

const { Option } = Select;
function CommunityCreate() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <>
      <AllContentAlign>
        <TitleAlign>
          <h1>글 작성</h1>
        </TitleAlign>
        <RegisterGreenBtn />
        <Form>
          <Input placeholder="Basic usage" />
          <CommunityFormSecond>
            <DatePicker />
            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Select defaultValue="Option1">
              <Option value="Option1">말머리 선택</Option>
              <Option value="Option2">Option2</Option>
            </Select>
          </CommunityFormSecond>
          <TextArea showCount maxLength={500} onChange={onChange} />
        </Form>
      </AllContentAlign>
    </>
  );
}

export default CommunityCreate;
