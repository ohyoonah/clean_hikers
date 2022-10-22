import { Avatar, Button, List } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../../api/api";
import { UserOutlined } from "@ant-design/icons";
function CommentDetail({ comments, handleDelete, currentUserId }) {
  return (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(item) => (
        <>
          {console.log("item test", item)}
          <List.Item
            extra={
              item.user_id === currentUserId && (
                <Button onClick={() => handleDelete(item)}>삭제</Button>
              )
            }
          >
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={item.nickname}
              description={item.description}
            />
          </List.Item>
        </>
      )}
    />
  );
}

export default CommentDetail;
