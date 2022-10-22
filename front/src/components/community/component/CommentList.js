import { Avatar } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { CommunityCommentList } from "../styledComponents/CommunityDetailStyled";
import CommentDetail from "./CommentDetail";
import CommentEdit from "./CommentEdit";
import * as api from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

function CommentList({ currentUserData, datas }) {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [commentNum, setCommentNum] = useState(0);
  const newComments = [...comments];
  const navigate = useNavigate();

  const currentUserId = currentUserData.id;

  useEffect(() => {
    async function getCommentData() {
      try {
        await api
          .get(`community/posts/comments`, `${datas.post_id}`)
          .then(
            (res) => (setComments(res.data), console.log(res.data[commentNum]))
          );
      } catch (res) {
        console.log(res);
      }
    }
    getCommentData();
  }, [datas]);

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);

    setTimeout(async () => {
      setSubmitting(false);
      let res = await api.post(`community/posts/comment`, {
        user_id: currentUserData.id,
        post_id: datas.post_id,
        title: "3333",
        description: value,
        nickname: currentUserData.nickname,
      });
      console.log(res);
      // res = await api.get(``)

      newComments.unshift(res.data);
      console.log(newComments);
      setValue("");
      setComments([
        ...comments,
        {
          author: currentUserData.nickname,
          avatar: currentUserData.defaultImage,
          content: <p>{value}</p>,
          datetime: moment(comments.createdAt).fromNow(),
        },
      ]);
      setComments(newComments);
    }, 500);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleDelete = function (item) {
    if (window.confirm("해당 댓글을 삭제하시겠습니까?")) {
      console.log(item);
      api.delete(`community/posts/comments`, `${item.comment_id}`);
      return navigate(0);
    }
  };
  return (
    <>
      {comments.length > 0 && (
        <CommentDetail
          comments={newComments}
          handleDelete={handleDelete}
          currentUserId={currentUserId}
        />
      )}
      {console.log("test", currentUserData)}
      {currentUserData.id && (
        <CommunityCommentList
          avatar={
            <Avatar src={currentUserData.defaultImage} alt="user Image" />
          }
          content={
            <CommentEdit
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      )}
    </>
  );
}

export default CommentList;
