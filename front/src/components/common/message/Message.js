import { message, notification } from "antd";

export function successMessage(msg) {
  message.success({
    content: `${msg}.`,
    style: {
      marginTop: "10vh",
    },
  });
}

export function errorMessage(msg) {
  message.error({
    content: `${msg}.`,
    style: {
      marginTop: "10vh",
    },
  });
}

export function notificationMessage(placement) {
  notification.info({
    message: "로그인 만료 안내",
    description: "5분 후에 로그인이 만료됩니다.\n다시 로그인 해주세요!",
    style: { whiteSpace: "pre-line" },
    placement,
  });
}
