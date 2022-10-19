/*검색창*/
import styled from "styled-components";
import { Select, Input, Form } from "antd";
import { NonIconGreenBtn } from "../common/button/NonIconBtn";
import * as api from "../../api/api";

const { Option } = Select;

const Main = styled(Form)`
  /* Display & Box Model */
  display: grid;
  justify-content: center;
  grid-template-columns: 150px 150px 3fr 120px;
  grid-column-gap: 15px;
  width: 1130px;
  max-width: 80%;
  padding: 15px;
  border-radius: 20px;
  margin: 0 auto;

  /* Color */
  background-color: rgb(230, 230, 230);

  /* Text */
  align-items: center;
`;

const InputWrapper = styled(Input)`
  /* Display & Box Model */
  height: 40px;
  padding: 0px 20px;
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

const regions = [
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

function MountainSearch({
  location,
  setLocation,
  difficulty,
  setDifficulty,
  search,
  setSearch,
  setMountainList,
  pageNum,
}) {
  const onChange = (e) => {
    // 검색 창에 입력된 글자를 받아오는 함수
    setSearch(e.target.value);
  };

  async function getMountainData() {
    try {
      await api
        .get(
          `mountain/detail`,
          `?location=${location}&level=${difficulty}&currentPage=${pageNum}&mountain=${search}`
        )
        .then((res) =>
          res.data.maxPage == 0 ? setMountainList([]) : setMountainList(res.data.mountain)
        );
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Main>
      {/* 위치선택 셀렉트 */}
      <SelectWrapper
        className="locationSelect"
        bordered={false}
        defaultValue="전체"
        onChange={(e) => setLocation(e)}
      >
        {regions.map((area, idx) => (
          <Option value={area.value} key={idx}>
            {area.location}
          </Option>
        ))}
      </SelectWrapper>

      {/* 난이도선택 셀렉트 */}
      <SelectWrapper
        className="difficultySelect"
        bordered={false}
        defaultValue="전체"
        onChange={(e) => setDifficulty(e)}
      >
        <Option value="">전체</Option>
        <Option value="상">상</Option>
        <Option value="중">중</Option>
        <Option value="하">하</Option>
        <Option value="미분류">미분류</Option>
      </SelectWrapper>

      <InputWrapper
        type="text"
        onChange={onChange}
        placeholder="산 이름을 입력해주세요..."
        value={search}
      />
      <NonIconGreenBtn
        htmlType="submit"
        text={"검색"}
        onClick={(e) => {
          e.preventDefault();
          getMountainData();
        }}
      />
    </Main>
  );
}
export default MountainSearch;
