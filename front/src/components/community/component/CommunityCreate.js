import React from "react";
import { DatePicker, Input, Select } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import {
  TitleAlign,
  AllContentAlign,
  CommunityFormSecond,
} from "../styledComponents/CommunityCreateStyled";
import TextArea from "antd/lib/input/TextArea";
import { RegisterGreenBtn } from "../../common/button/IconBtn";
const { Option } = Select;
function CommunityCreate() {
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
        <form>
          <Input placeholder="Basic usage" />
          <CommunityFormSecond>
            <Select defaultValue="Option1">
              <Option value="Option1">말머리 선택</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input
              placeholder="default size"
              prefix={<EnvironmentOutlined />}
            />
            <DatePicker
              style={{
                width: "70%",
              }}
            />
          </CommunityFormSecond>
          <TextArea showCount maxLength={500} onChange={onChange} />
        </form>
      </AllContentAlign>
    </>
  );
}

export default CommunityCreate;
