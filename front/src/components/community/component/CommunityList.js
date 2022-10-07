import React from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import RecruitButton from "../styledComponents/CommunityListStyled";

function CommunityList() {
  return (
    <div>
      <RecruitButton>
        <Link to="communityCreate">
          <Button
            type="primary"
            icon={<PlusSquareOutlined />}
            className="communityList-title-button"
            size="large"
          >
            모집하기
          </Button>
        </Link>
      </RecruitButton>
    </div>
  );
}

export default CommunityList;
