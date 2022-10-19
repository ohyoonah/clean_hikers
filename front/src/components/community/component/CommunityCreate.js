import React, { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import moment from "moment";
import { FormOutlined } from "@ant-design/icons";
import {
  TitleAlign,
  CommunityFormSecond,
  AllContentAlign,
} from "../styledComponents/CommunityCreateStyled";
import { RegisterBtnStyled } from "../../common/button/IconBtnStyled";

import * as api from "../../../api/api";
import { useLocation } from "react-router-dom";

const { Option } = Select;

function CommunityCreate() {
  const [componentSize, setComponentSize] = useState("default");
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [date, setDate] = useState("");
  const [state, setState] = useState("");
  const location = useLocation();

  if (location.state) {
    console.log(location.state);
  }

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = async (e) => {
    await api.post("community/post", {
      ...e,
    });
    const createAt = moment().format("YYYY.MM.DD  HH:mm:ss");
    console.log("Success", { ...e, createAt });
  };

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <TitleAlign>
            <h1>글 작성</h1>
          </TitleAlign>
          <Form onFinish={onFinish}>
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
              onChange={(e) => setTitle(e.target.value)}
            >
              <Input placeholder="제목을 입력하세요" className="title" />
            </Form.Item>
            <CommunityFormSecond>
              <Form.Item
                name="visitDate"
                rules={[{ required: true, message: "날짜를 입력하세요" }]}
                onChange={(e) => setDate(e.target.value)}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                name="location"
                rules={[{ required: true, message: "제목을 입력하세요" }]}
              >
                <Select>
                  <Select.Option value="서울">서울</Select.Option>
                  <Select.Option value="경기">경기</Select.Option>
                  <Select.Option value="인천">인천</Select.Option>
                  <Select.Option value="강원">강원</Select.Option>
                  <Select.Option value="충북">충북</Select.Option>
                  <Select.Option value="충남">충남</Select.Option>
                  <Select.Option value="경북">경북</Select.Option>
                  <Select.Option value="경남">경남</Select.Option>
                  <Select.Option value="전북">전북</Select.Option>
                  <Select.Option value="전남">전남</Select.Option>
                  <Select.Option value="부산">부산</Select.Option>
                  <Select.Option value="제주">제주</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="state"
                rules={[{ required: true, message: "제목을 입력하세요" }]}
              >
                <Select defaultValue="클린후기" onChange={(e) => setState(e)}>
                  <Option value="클린후기">클린후기</Option>
                  <Option value="모집중">모집중</Option>
                  <Option value="모집완료">모집완료</Option>
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
                onChange={(e) => setDiscription(e.target.value)}
              />
            </Form.Item>
          </Form>
        </Col>
        <Col span={2}></Col>
      </Row>
    </>
  );
}

export default CommunityCreate;
