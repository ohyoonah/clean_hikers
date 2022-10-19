import styled from "styled-components";
import { theme } from "../common/styles/palette";

export const ProfileBlock = styled.div`
  height: 100%;
  text-align: center;
  h2 {
    margin: 2rem 0;
  }
  img {
    object-fit: fill;
  }
  .textBlcok {
    font-size: 1rem;
    margin: 1.5rem 0 3rem 0;
  }
  .ant-form-item {
    width: 300px;
    margin: 1.5rem auto;
    text-align: start;
    position: relative;
  }
  .label {
    font-weight: 700;
    margin-right: 1rem;
  }
  .ant-form-item-label {
    position: absolute;
    left: -70px;
    font-weight: 700;
  }
  .ant-input-group {
    display: flex;
  }
  .submitButton {
    background: ${theme.primary};
    color: white;
    border: none;
  }
  .smallButton {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
`;

export const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  .ant-avatar {
    opacity: 0.7;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    position: relative;
    border: 1px dotted ${theme.black};
  }
  .delete {
    color: ${theme.mainBlue};
    background: none;
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
  }
  input[type="file"] {
    display: none;
  }
  label {
    position: relative;
  }
  .uploadButton {
    position: absolute;
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 50%;
    z-index: 1;
    cursor: pointer;
    &:hover {
      background: #00000040;
    }
  }
`;
