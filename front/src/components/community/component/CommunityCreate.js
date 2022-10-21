import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Select } from "antd";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import { FormOutlined } from "@ant-design/icons";
import {
  SecondRow,
  CommunityDatePicker,
  CenterRow,
  RegisterBtnStyled,
  CommunityInput,
  FirstRow,
  H1,
  FormItem,
} from "../styledComponents/CommunityCreateStyled";
import * as api from "../../../api/api";
import { CommunityNavCol } from "../styledComponents/CommunityNavStyled";
import { ROUTES } from "../../../enum/routes";

const { Option } = Select;

function CommunityCreate() {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState("");
  const [nickname, setNickName] = useState("");
  const fields = {
    title: null,
    visitDate: null,
    location: null,
    state: "모집중",
    personnel: null,
    description: null,
  };

  useEffect(() => {
    if (location.state) {
      const { mountain, count, date } = location.state;
      const dateFormat = "YYYY/MM/DD";

      form.setFieldsValue({
        ...fields,
        location: mountain,
        personnel: count,
        visitDate: date ? moment(date, dateFormat) : null,
        state: "모집중",
      });
    }
  }, []);

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

  const onFinish = async (value) => {
    console.log(value);

    await api
      .post("community/post", {
        user_id: id,
        title: value.title,
        description: value.description,
        date: value.visitDate,
        nickname: nickname,
        station: value.state,
        location: value.location,
        personnel: value.personnel,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return navigate(ROUTES.COMMUNITY.ROOT);
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
      <CenterRow justify="center">
        <CommunityNavCol>
          <Form form={form} onFinish={onFinish}>
            <FirstRow>
              <H1>글 작성</H1>
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
            </FirstRow>
            <FormItem
              name="title"
              rules={[{ required: true, message: "제목을 입력하세요" }]}
            >
              <CommunityInput placeholder="제목을 입력하세요" />
            </FormItem>
            <SecondRow gutter={0}>
              <Col span={6}>
                <FormItem
                  name="visitDate"
                  rules={[{ required: true, message: "날짜를 입력하세요" }]}
                >
                  <CommunityDatePicker />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  name="location"
                  rules={[{ required: true, message: "산을 선택해주세요" }]}
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
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  name="state"
                  rules={[{ required: true, message: "제목을 입력하세요" }]}
                >
                  <Select>
                    <Option value="클린후기">클린후기</Option>
                    <Option value="모집중">모집중</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem
                  name="personnel"
                  rules={[{ required: true, message: "제목을 입력하세요" }]}
                >
                  <Select>
                    <Select.Option value="2">2명</Select.Option>
                    <Select.Option value="3">3명</Select.Option>
                    <Select.Option value="4">4명</Select.Option>
                    <Select.Option value="5">5명</Select.Option>
                    <Select.Option value="6">6명</Select.Option>
                    <Select.Option value="7">7명</Select.Option>
                    <Select.Option value="8">8명</Select.Option>
                    <Select.Option value="9">9명</Select.Option>
                    <Select.Option value="10">10명</Select.Option>
                  </Select>
                </FormItem>
              </Col>
            </SecondRow>

            <FormItem
              name="description"
              rules={[{ required: true, message: "내용을 입력하세요" }]}
            >
              <Input.TextArea
                rows={20}
                showCount
                maxLength={1000}
                size="large"
              />
            </FormItem>
          </Form>
        </CommunityNavCol>
      </CenterRow>
    </>
  );
}

export default CommunityCreate;
