import styled from "styled-components";
import { theme } from "../common/styles/palette";

export const BannerWrapper = styled.div`
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: ${theme.deepBlue},
    fontWeight: 700,
    fontSize: "36px",
    width: "100%",
    height: "400px",
  `;
