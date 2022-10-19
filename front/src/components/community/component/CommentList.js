import { Avatar, Comment, List, Tooltip } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { CommunityCommentList } from "../styledComponents/CommunityDetailStyled";
import CommentDetail from "./CommentDetail";
import CommentEdit from "./CommentEdit";
import * as api from "../../../api/api";

function CommentList({ currentUserData, datas }) {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [commentNum, setCommentNum] = useState(0);

  useEffect(() => {
    async function getCommentData() {
      console.log(datas);
      try {
        await api.get(`community/posts/comments`, `${datas.post_id}`);
      } catch (res) {
        console.log(res);
      }
    }
    getCommentData();
  }, []);

  async function getCommentData() {
    try {
      await api.post(`community/posts/comment`, {
        comment_id: commentNum,
        user_id: currentUserData.user_id,
        post_id: datas.user_id,
        title: "3333",
        description: "test",
        nickname: currentUserData.nickname,
      });
    } catch (res) {
      console.log(res);
    }
  }

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);

    setTimeout(() => {
      getCommentData();
      setSubmitting(false);

      setValue("");
      setComments([
        ...comments,
        {
          author: currentUserData.nickname,
          avatar: currentUserData.defaultImage,
          content: <p>{value}</p>,
          datetime: moment("2016-11-22").fromNow(),
        },
      ]);
    }, 500);

    console.log(comments);
    setCommentNum(commentNum + 1);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {comments.length > 0 && <CommentDetail comments={comments} />}
      <CommunityCommentList
        avatar={<Avatar src={comments.avatar} alt="user Image" />}
        content={
          <CommentEdit
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );
}

export default CommentList;
