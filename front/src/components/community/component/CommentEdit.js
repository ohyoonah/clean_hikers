import { Button, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { NonIconBlueBtnStyled } from "../../common/button/NonIconBtnStyled";

function CommentEdit({ onChange, onSubmit, submitting, value }) {
  return (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          등록
        </Button>
      </Form.Item>
    </>
  );
}

export default CommentEdit;
