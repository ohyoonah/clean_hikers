import React, { useEffect, useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { FormOutlined } from "@ant-design/icons";
import {
  CommunityFormSecond,
  AllContentAlign,
  CommunityCreateBtn,
} from "../styledComponents/CommunityCreateStyled";
import { RegisterBtnStyled } from "../../common/button/IconBtnStyled";
import * as api from "../../../api/api";
import { CommunityNavCol } from "../styledComponents/CommunityNavStyled";
import { HttpStatusCode } from "../../../enum/httpStautsCode";

const { Option } = Select;

function CommunityCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [state, setState] = useState("");
  const [id, setId] = useState("");
  const [nickname, setNickName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      try {
        const { data: currentUser } = await api.get("user/user-page");
        setId(currentUser.id);
        setNickName(currentUser.nickname);
        console.log(nickname, id);
      } catch (e) {
        console.error(e);
      }
    }
    getUserData();
  }, []);

  const onFinish = async (e) => {
    await api
      .post("community/post", {
        user_id: id,
        title: title,
        description: description,
        date: e.visitDate,
        nickname: nickname,
        station: state,
        location: e.location,
        personnel: 3,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    const createAt = moment().format("YYYY.MM.DD  HH:mm:ss");
    console.log("Success", { ...e, createAt });
    return navigate(-1);
  };
  async function fetchData() {
    const res = await api.get("community/location");
    console.log(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Row justify="center">
        <CommunityNavCol>
          <h1>글 작성</h1>
          <Form onFinish={onFinish}>
            <RegisterBtnStyled>
              <CommunityCreateBtn
                type="primary"
                icon={<FormOutlined />}
                className="community-title-button"
                size="large"
                htmlType="submit"
              >
                등록하기
              </CommunityCreateBtn>
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
                onChange={(e) => setVisitDate(e.target.value)}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                name="location"
                rules={[{ required: true, message: "제목을 입력하세요" }]}
              >
                <Select>
                  <Select.Option value="가야산">가야산</Select.Option>
                  <Select.Option value="계룡산">계룡산</Select.Option>
                  <Select.Option value="내장산">내장산</Select.Option>
                  <Select.Option value="덕유산">덕유산</Select.Option>
                  <Select.Option value="무등산">무등산</Select.Option>
                  <Select.Option value="북한산">북한산</Select.Option>
                  <Select.Option value="설악산">설악산</Select.Option>
                  <Select.Option value="소백산">소백산</Select.Option>
                  <Select.Option value="속리산">속리산</Select.Option>
                  <Select.Option value="오대산">오대산</Select.Option>
                  <Select.Option value="월악산">월악산</Select.Option>
                  <Select.Option value="월출산">월출산</Select.Option>
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
              name="description"
              rules={[{ required: true, message: "내용을 입력하세요" }]}
            >
              <Input.TextArea
                rows={20}
                showCount
                maxLength={1000}
                size="large"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>
          </Form>
        </CommunityNavCol>
      </Row>
    </>
  );
}

export default CommunityCreate;
