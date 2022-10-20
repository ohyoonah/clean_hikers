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

const FORM = {
  title: "",
  description: "",
  visitDate: "",
  location: "",
  personnel: "",
  station: "",
};

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
              setDatas(res.data),
              console.log(res.data),
              setLocation(res.data.location)
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
        user_id: datas.user_id,
        title: title,
        description: description,
        date: visitDate,
        nickname: nickname,
        header: "mink",
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
  console.log(datas);

  useEffect(() => {
    form.setFieldsValue({
      title: datas.title,
      description: datas.description,
      visitDate: datas.date,
      location: location,
      personnel: datas.personnel,
      state: datas.station,
    });
    console.log("확인", datas);
  }, [FORM]);

  return (
    <>
      <CenterRow justify="center">
        <CommunityNavCol>
          <Form form={form} onFinish={onFinish} initialValues={Form}>
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
                  rules={[{ required: true, message: "제목을 입력하세요" }]}
                >
                  <Select>{datas.location}</Select>
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
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  name="personnel"
                  rules={[{ required: true, message: "제목을 입력하세요" }]}
                >
                  <Select>{datas.personnel}</Select>
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
