import { Pagination } from "antd";
import React from "react";
import {
  CommunityListAlign,
  CommunityPagenationStyled,
} from "../../community/styledComponents/CommunityListStyled";

function BottomNavigation({ props }) {
  return (
    <div>
      <CommunityListAlign>
        <CommunityPagenationStyled>
          <Pagination size="small" total={props} defaultPageSize={5} />
        </CommunityPagenationStyled>
      </CommunityListAlign>
    </div>
  );
}

export default BottomNavigation;
