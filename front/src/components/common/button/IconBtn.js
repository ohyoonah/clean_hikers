import { Button } from "antd";
import { FormOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { RecruitBtnStyled, RegisterBtnStyled } from "./IconBtnStyled";

// 아이콘이 들어간 버튼 컴포넌트 모음

function RecruitBlueBtn() {
  return (
    <>
      <RecruitBtnStyled>
        <Button
          type="primary"
          icon={<PlusSquareOutlined />}
          className="communityList-title-button"
          size="large"
        >
          모집하기
        </Button>
      </RecruitBtnStyled>
    </>
  );
}

function RegisterGreenBtn() {
  return (
    <>
      <RegisterBtnStyled>
        <Button
          type="primary"
          icon={<FormOutlined />}
          className="community-title-button"
          size="large"
        >
          등록하기
        </Button>
      </RegisterBtnStyled>
    </>
  );
}
export { RecruitBlueBtn, RegisterGreenBtn };
