import React, { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import moment from "moment";
import { FormOutlined, PlusSquareOutlined } from "@ant-design/icons";
import {
  TitleAlign,
  CommunityFormSecond,
  AllContentAlign,
} from "../styledComponents/CommunityCreateStyled";
import { RegisterBtnStyled } from "../../common/button/IconBtnStyled";

const { Option } = Select;

function CommunityCreate() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = (v) => {
    const createAt = moment().format("YYYY.MM.DD  HH:mm:ss");
    console.log("Success", { ...v, createAt });
  };

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <>
      <AllContentAlign>
        <Form onFinish={onFinish}>
          <TitleAlign>
            <h1>글 작성</h1>
          </TitleAlign>
          <RegisterBtnStyled>
            <Button
              type="primary"
              icon={<FormOutlined />}
              className="community-title-button"
              size="large"
              htmlType="submit"
            >
              등록하기
            </Button>
          </RegisterBtnStyled>

          <Form.Item
            name="title"
            rules={[{ required: true, message: "제목을 입력하세요" }]}
          >
            <Input placeholder="제목을 입력하세요" className="title" />
          </Form.Item>
          <CommunityFormSecond>
            <Form.Item
              name="visitDate"
              rules={[{ required: true, message: "날짜를 입력하세요" }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="title"
              rules={[{ required: true, message: "제목을 입력하세요" }]}
            >
              <Select>
                <Select.Option value="visit1">서울</Select.Option>
                <Select.Option value="visit2">부산</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="content"
              rules={[{ required: true, message: "제목을 입력하세요" }]}
            >
              <Select defaultValue="Option1">
                <Option value="Option1">클린후기</Option>
                <Option value="Option2">모집중</Option>
                <Option value="Option3">모집완료</Option>
              </Select>
            </Form.Item>
          </CommunityFormSecond>
          <Form.Item
            name="content"
            rules={[{ required: true, message: "내용을 입력하세요" }]}
          >
            <Input.TextArea
              rows={20}
              showCount
              maxLength={1000}
              size="large"
              onChange={onChange}
            />
          </Form.Item>
        </Form>
      </AllContentAlign>
    </>
  );
}

export default CommunityCreate;
