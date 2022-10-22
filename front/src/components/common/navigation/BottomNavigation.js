import { Pagination } from "antd";
import React from "react";
import {
  CommunityListAlign,
  CommunityPagenationStyled,
} from "../../community/styledComponents/CommunityListStyled";

function BottomNavigation({ props, onChangePage }) {
  return (
    <div>
      <CommunityListAlign>
        <CommunityPagenationStyled>
          <Pagination
            size="small"
            total={props}
            defaultPageSize={5}
            onChange={(e) => onChangePage(e)}
          />
        </CommunityPagenationStyled>
      </CommunityListAlign>
    </div>
  );
}

export default BottomNavigation;
