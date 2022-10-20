import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, Select } from "antd";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import { FormOutlined } from "@ant-design/icons";
import {
  SecondRow,
  CommunityDatePicker,
  CenterRow,
  RegisterBtnStyled,
  CommunityInput,
  FirstRow,
} from "../styledComponents/CommunityCreateStyled";
import * as api from "../../../api/api";
import { CommunityNavCol } from "../styledComponents/CommunityNavStyled";

const { Option } = Select;

const FORM = { title: "", description: "" };

function CommunityEdit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [state, setState] = useState(""); // 클린후기, 모집중 같은 머리말
  const [id, setId] = useState("");
  const [nickname, setNickName] = useState("");
  const [datas, setDatas] = useState("");
  const [location, setLocation] = useState({});
  const [form] = Form.useForm();
  const [tempForm, setTempFrom] = useState(FORM);

  // URI 파라미터 들고오기
  const { no } = useParams();
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

  useEffect(() => {
    async function getCommunityDetailDdata() {
      try {
        await api
          .get(`community/postsDetail/${no}`)
          .then(
            (res) => (
              setDatas(res.data[0]),
              console.log(res.data[0]),
              setLocation(res.data[0].location)
            )
          );
      } catch (res) {
        console.log(res);
      }
    }
    getCommunityDetailDdata();
  }, [no]);

  const onFinish = async (e) => {
    await api
      .put(`community/posts/${datas.post_id}`, {
        user_id: id,
        title: title,
        description: description,
        date: visitDate,
        nickname: nickname,
        station: state,
        location: e.location,
        personnel: e.personnel,
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
  console.log(datas.title);

  useEffect(() => {
    form.setFieldsValue({
      title: datas.title,
      description: datas.description,
      visitDate: datas.date,
      location: datas.location,
    });
    console.log("확인", datas);
  }, [FORM]);

  return (
    <>
      <CenterRow justify="center">
        <CommunityNavCol>
          <Form form={form} onFinish={onFinish} initialValues={tempForm}>
            <FirstRow>
              <h1>글 작성</h1>
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
            <Form.Item
              name="title"
              rules={[{ required: true, message: "제목을 입력하세요" }]}
              onChange={(e) => setTitle(e.target.value)}
            >
              <CommunityInput
                placeholder="제목을 입력하세요"
                className="title"
                value={datas.title}
              />
            </Form.Item>
            <SecondRow>
              <Col span={6}>
                <Form.Item
                  rules={[{ required: true, message: "날짜를 입력하세요" }]}
                  onChange={(e) => setVisitDate(e.target.value)}
                >
                  <CommunityDatePicker name="visitDate" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="location"
                  onChange={(e) => setLocation(e)}
                  rules={[{ required: true, message: "제목을 입력하세요" }]}
                >
                  <Select name="location" onChange={(e) => setLocation(e)}>
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
              </Col>
              <Col span={6}>
                <Form.Item
                  name="state"
                  rules={[{ required: true, message: "제목을 입력하세요" }]}
                >
                  <Select onChange={(e) => setState(e)}>
                    <Option value="클린후기">클린후기</Option>
                    <Option value="모집중">모집중</Option>
                    {/* <Option value="모집완료">모집완료</Option> */}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
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
                </Form.Item>
              </Col>
            </SecondRow>

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
      </CenterRow>
    </>
  );
}

export default CommunityEdit;
