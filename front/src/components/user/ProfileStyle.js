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
    .label {
      font-weight: 700;
      margin-right: 1rem;
    }
  }
  .ant-form-item {
    width: 300px;
    margin: 1.5rem auto;
    label {
      display: flex;
      justify-content: end;
      width: 100px;
      font-weight: 700;
    }
  }
  .smallButton {
    margin-top: 3rem;
    margin-bottom: 5rem;
  }
`;

export const UploadBlock = styled(Upload)`
  overflow: hidden;
  img {
    height: 100%;
  }
`;
