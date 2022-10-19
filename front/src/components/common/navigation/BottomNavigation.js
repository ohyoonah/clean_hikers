import { Pagination } from "antd";
import React from "react";
import {
  CommunityListAlign,
  CommunityPagenationStyled,
} from "../../community/styledComponents/CommunityListStyled";

function BottomNavigation() {
  return (
    <div>
      <CommunityListAlign>
        <CommunityPagenationStyled>
          <Pagination size="small" total={50} />
        </CommunityPagenationStyled>
      </CommunityListAlign>
    </div>
  );
}

export default BottomNavigation;
