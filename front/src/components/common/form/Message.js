import { message } from "antd";

export const successMessage = (msg) => {
  message.success({
    content: `${msg}.`,
    style: {
      marginTop: "10vh",
    },
  });
};

export const errorMessage = (msg) => {
  message.error({
    content: `${msg}.`,
    style: {
      marginTop: "10vh",
    },
  });
};
