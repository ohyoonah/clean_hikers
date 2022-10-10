/*검색창*/
import { useState } from "react";
import styled from "styled-components";
import { Button, Dropdown, Menu, Space, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Option } = Select;
const Main = styled.form`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr;
  grid-column-gap: 15px;
  border-radius: 20px;
  margin: 0 auto;
  padding: 15px;
  background-color: rgb(230, 230, 230);
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  background-color: white;
  border: 0px;
  border-radius: 10px;
  padding: 0px 20px;
  height: 50px;
  outline: none; /* 포커스 시 파란테두리 제거 */
  font-size: 18px;
`;

const SelectWrapper = styled(Select)`
  background-color: white;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  outline: none; /* 포커스 시 파란테두리 제거 */
  font-size: 16px;
`;

const ButtonWrapper = styled(Button)`
  border: 0px;
  border-radius: 10px;
  height: 50px;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  outline: none; /* 포커스 시 파란테두리 제거 */
  font-size: 18px;
`;

function MountainSearch() {
  const [location, setLocation] = useState("위치");
  const [level, setLevel] = useState("난이도");
  const [search, setSearch] = useState("");

  const LOCATION = [
    { key: "0", label: "서울" },
    { key: "1", label: "경기" },
    { key: "2", label: "인천" },
    { key: "3", label: "강원" },
    { key: "4", label: "충북" },
    { key: "5", label: "충남" },
    { key: "6", label: "경북" },
    { key: "7", label: "경남" },
    { key: "8", label: "전북" },
    { key: "9", label: "전남" },
    { key: "10", label: "부산" },
    { key: "11", label: "제주" },
  ];
  const LEVEL = [
    { key: "0", label: "상" },
    { key: "1", label: "중" },
    { key: "2", label: "하" },
  ];

  const onSubmit = (e) => {
    e.preventDefault(); // 엔터 press 시 자동 submit 막는 기능
    setSearch(""); // submit 시 검색 창 글자 초기화
    // 추후 백엔드로 post하는 코드 삽입구역
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (e) => {
    // 검색 창에 입력된 글자를 받아오는 함수
    setSearch(e.target.value);
  };

  return (
    <Main onSubmit={onSubmit}>
      {/* 위치선택 셀렉트 */}
      <SelectWrapper defaultValue="지역" onChange={handleChange}>
        <Option value="0"> 서울</Option>
        <Option value="1"> 경기</Option>
        <Option value="2"> 인천</Option>
        <Option value="3"> 강원</Option>
        <Option value="4"> 충북</Option>
        <Option value="5"> 충남</Option>
        <Option value="6"> 경북</Option>
        <Option value="7"> 경남</Option>
        <Option value="8"> 전북</Option>
        <Option value="9"> 전남</Option>
        <Option value="10"> 부산</Option>
        <Option value="11"> 제주</Option>
      </SelectWrapper>

      {/* 난이도선택 셀렉트 */}
      <SelectWrapper defaultValue="난이도" onChange={handleChange}>
        <Option value="high">상</Option>
        <Option value="middle">중</Option>
        <Option value="low">하</Option>
      </SelectWrapper>

      <Input
        type="text"
        onChange={onChange}
        placeholder="산 이름을 입력해주세요..."
        value={search}
        autoFocus={true}
      />
      <ButtonWrapper type="primary">검색</ButtonWrapper>
    </Main>
  );
}
export default MountainSearch;
