import styled from "styled-components";
import "antd/dist/antd.css";
import { Button, Col } from "antd";
import { theme } from "../../common/styles/palette";

const CommunityItemStyled = styled.div`
  color: black;
  .writer-user-name {
    display: flex;
    justify-content: end;
  }
`;

const StateButton = styled(Button)`
  background-color: ${({ station }) =>
    station === "모집중"
      ? theme.primary
      : station === "클린후기"
      ? theme.mainBlue
      : "gray"};
  color: white;
  font-weight: 700;
  margin-right: 5px;
  &:hover {
    background-color: ${theme.primary};
    color: white;
    font-weight: 700;
  }
`;

const ItemCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { CommunityItemStyled, StateButton, ItemCol };
