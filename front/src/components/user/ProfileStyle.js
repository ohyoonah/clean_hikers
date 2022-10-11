import styled from "styled-components";
import { Upload } from "antd";

export const ProfileBlock = styled.div`
  height: 100%;
  text-align: center;
  h2 {
    margin: 2rem 0;
  }
  .ant-upload {
    border-radius: 50%;
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
    &:last-child {
      margin-bottom: 3rem;
    }
    label {
      width: 65px;
      font-weight: 700;
    }
  }
`;

export const UploadBlock = styled(Upload)`
  overflow: hidden;
  img {
    height: 100%;
  }
`;