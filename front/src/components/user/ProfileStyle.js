import styled from "styled-components";
import { theme } from "../common/styles/palette";

export const ProfileBlock = styled.div`
  text-align: center;

  h2 {
    margin: 2rem 0;
  }

  img {
    object-fit: fill;
  }

  .ant-avatar {
    border: 1px solid #cacaca;
  }

  .textBlcok {
    margin: 1.5rem 0;
    font-size: 1rem;
  }

  .ant-form-item {
    position: relative;
    width: 300px;
    margin: 1.5rem auto;
    text-align: start;
  }

  .ant-form-item-label {
    position: absolute;
    left: -70px;
    font-weight: 700;
  }

  .label {
    margin-right: 1rem;
    font-weight: 700;
  }

  .ant-input-group {
    display: flex;
  }

  .submitButton {
    width: 70px;
    background: ${theme.primary};
    color: white;
    border: none;
  }

  .smallButton {
    margin: 3rem auto;
  }
`;

export const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;

  .ant-avatar {
    position: relative;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    opacity: 0.6;
    background: #ececec;
  }

  .delete {
    background: none;
    color: ${theme.mainBlue};
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
    z-index: 1;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background: #0000001f;
    }
  }
`;
