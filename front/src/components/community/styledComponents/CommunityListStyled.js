import styled from "styled-components";
import "antd/dist/antd.css";

const RecruitBlueBtnAlign = styled.div`
  padding: 20px;
  display: flex;
  justify-content: end;
`;

const CommunityNavStyled = styled.div`
  padding: 20px;
  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active {
    border-color: #89a550;
    background-color: #89a550;
    color: #000;
  }
  .community-navigate:hover {
    color: #89a550;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
    color: #000;
    font-weight: bold;
  }
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected::after,
  .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected::after {
    border-bottom: 3px solid #89a550;
  }
  svg:hover {
    color: #89a550;
  }
`;

const CommunityPagenationStyled = styled.div`
  .ant-pagination-item-active a {
    color: #89a550;
    border: none;
  }
  .ant-pagination-item-active {
    border: none;
    text-decoration: underline 2px;
  }
`;

const CommunityListAlign = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export {
  RecruitBlueBtnAlign,
  CommunityNavStyled,
  CommunityPagenationStyled,
  CommunityListAlign,
};
