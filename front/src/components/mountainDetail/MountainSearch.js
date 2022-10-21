/*검색창*/
import styled from "styled-components";
import { Select, Input, Form } from "antd";

const { Option } = Select;

const Main = styled(Form)`
  /* Display & Box Model */
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 3fr;
  grid-column-gap: 15px;

  padding: 10px;
  border-radius: 15px;
  margin: 0 auto;

  /* Color */
  background-color: rgb(230, 230, 230);

  /* Text */
  align-items: center;
`;

const InputWrapper = styled(Input)`
  /* Display & Box Model */
  height: 40px;
  padding: 0px 15px;
  border: 0px;
  border-radius: 10px;

  /* Color */
  background-color: white;

  /* Text */
  font-size: 16px;

  /* Other */
  outline: none;
`;

const SelectWrapper = styled(Select)`
  /* Display & Box Model */
  height: 40px;
  padding: 4px 0px;
  border-radius: 10px;

  /* Color */
  background-color: white;
`;

const locations = [
  { value: "", location: "전체" },
  { value: "서울특별시", location: "서울" },
  { value: "강원도", location: "강원" },
  { value: "광주광역시", location: "광주" },
  { value: "충청북도", location: "충북" },
  { value: "충청남도", location: "충남" },
  { value: "경상북도", location: "경북" },
  { value: "경상남도", location: "경남" },
  { value: "전라북도", location: "전북" },
  { value: "전라남도", location: "전남" },
  { value: "제주시", location: "제주" },
];

const levels = [
  { value: "", level: "전체" },
  { value: "상", level: "상" },
  { value: "중", level: "중" },
  { value: "하", level: "하" },
];

function MountainSearch({ setLocation, setDifficulty, search, setSearch }) {
  const onChange = (e) => {
    // 검색 창에 입력된 글자를 받아오는 함수
    setSearch(e.target.value);
  };

  return (
    <Main>
      {/* 위치선택 셀렉트 */}
      <SelectWrapper
        className="locationSelect"
        bordered={false}
        placeholder="지역"
        onChange={(e) => setLocation(e)}
      >
        {locations.map((value, idx) => (
          <Option value={value.value} key={idx}>
            {value.location}
          </Option>
        ))}
      </SelectWrapper>

      {/* 난이도선택 셀렉트 */}
      <SelectWrapper
        className="difficultySelect"
        bordered={false}
        placeholder="난이도"
        onChange={(e) => setDifficulty(e)}
      >
        {levels.map((value, idx) => (
          <Option value={value.value} key={idx}>
            {value.level}
          </Option>
        ))}
      </SelectWrapper>

      {/* 검색창 */}
      <InputWrapper
        type="text"
        onChange={onChange}
        placeholder="산 이름을 입력해주세요..."
        value={search}
      />
    </Main>
  );
}
export default MountainSearch;
