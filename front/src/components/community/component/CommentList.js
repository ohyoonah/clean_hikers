import { Avatar, Comment, List, Tooltip } from "antd";
import React, { useState } from "react";
import CommentDetail from "./CommentDetail";
import CommentEdit from "./CommentEdit";

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Han Solo",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title="2016-11-22 11:22:33">
        <span>8 hours ago</span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Han Solo",
    avatar: "https://joeschmoe.io/api/v1/random",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title="2016-11-22 10:22:33">
        <span>9 hours ago</span>
      </Tooltip>
    ),
  },
];

function CommentList() {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          avatar: "https://joeschmoe.io/api/v1/random",
          content: <p>{value}</p>,
          //datetime: moment('2016-11-22').fromNow(),
        },
      ]);
    }, 1000);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {comments.length > 0 && <CommentDetail comments={comments} />}
      <Comment
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
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
    </>
  );

  // return (
  //   <List
  //     className="comment-list"
  //     header={`${data.length} replies`}
  //     itemLayout="horizontal"
  //     dataSource={data}
  //     renderItem={(item) => (
  //       <li>
  //         <Comment
  //           actions={item.actions}
  //           author={item.author}
  //           avatar={item.avatar}
  //           content={item.content}
  //           datetime={item.datetime}
  //         />
  //       </li>
  //     )}
  //   />
  // );
}

export default CommentList;
