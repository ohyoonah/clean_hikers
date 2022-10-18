import styled from "styled-components";
import { theme } from "../common/styles/palette";
import { Upload } from "antd";

export const ProfileBlock = styled.div`
  height: 100%;
  text-align: center;
  h2 {
    margin: 2rem 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .ant-upload {
    border-radius: 50%;
    overflow: hidden;
    img {
      opacity: 0.8;
    }
  }
  .delete {
    color: ${theme.mainBlue};
    background: none;
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
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
  .ant-form-item label {
    margin: 0;
  }
  .ant-input-group {
    display: flex;
  }
  .submitButton {
    background: ${theme.primary};
    border: none;
  }
  .smallButton {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
  .error {
    color: red;
  }
`;

export const UploadBlock = styled(Upload)`
  overflow: hidden;
  img {
    height: 100%;
  }
`;
