import styled from "styled-components";
import { theme } from "../styles/palette";
import { Layout, Menu } from "antd";

export const HeaderLight = styled(Layout.Header)`
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
`;

export const NavMenu = styled(Menu)`
  /* Display & Box */
  display: flex;
  justify-content: end;
  align-items: center;

  /* Text */
  font-size: 16px;
  font-weight: 500;

  /* Text Hover & Selected */
  & .ant-menu-item-selected,
  & .ant-menu-item:hover,
  & .ant-menu-item::after,
  .ant-menu-submenu::after {
    color: ${theme.naturalGreen} !important;
    border: none !important;
  }
`;

// & .ant-menu-vertical .ant-menu-item::after {
//   color: ${theme.primary} !important
//   background-color: rgba(154, 195, 85, 0.1) !important;
// }

export const LogoWrapper = styled.div`
  float: left;
  width: 180px;
  height: 44px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 4px 10px 8px 0;
`;

export const ProfileIcon = styled.img`
  width: 45px;
  padding-bottom: 4px;
  border-radius: 100px;
`;

export { Layout };
