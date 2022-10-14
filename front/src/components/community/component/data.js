import React from "react";

const deadline = Date.now();

const initialState = {
  inputs: {
    title: "",
    userName: "",
    location: "",
    visitDate: deadline,
    visitMember: "",
    discription: "",
    state: "모집중",
  },
  users: [
    {
      id: 0,
      no: 0,
      userName: "등산최고",
      title: "지리산 가실 분",
      discription:
        "risus. Donec egestas. Duis ac arcu. Nunc mauris. MorbiWe will be playing one of the games that we played last time and one new game. This way we can practice skills in the games we already know while still exploring and learning new games each week.💡 SeoulShare Mission SeoulShare brings people together to encourage mutual understanding of each other and build a healthy and meaningful relationship with each other.",
      location: "지리산 | 경상남도 하동군",
      visitDate: "2022년 10월 9일 (일), 오전 10시",
      visitMember: 2,
      state: "모집중",
    },
    {
      id: 1,
      no: 1,
      userName: "산악최고",
      title: "북한산 가실 분",
      discription:
        "Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis",
      location: "Heredia",
      visitDate: "2022년 10월 9일 (일), 오전 10시",
      visitMember: 2,
      state: "모집완료",
    },
    {
      id: 1,
      no: 2,
      userName: "닉넴닉넴",
      title: "북한산 가실 분",
      discription:
        "mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus",
      location: "Biobío",
      visitDate: "2022년 10월 9일 (일), 오전 10시",
      visitMember: 2,
      state: "모집중",
    },
    {
      id: 3,
      no: 3,
      userName: "과자먹고싶다",
      title: "태백산 가실 분",
      discription:
        "sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum",
      location: "Ulster",
      visitDate: "2022년 10월 9일 (일), 오전 10시",
      visitMember: 2,
      state: "모집중",
    },
    {
      id: 3,
      no: 4,
      userName: "과자먹고싶다",
      title: "북한산 다녀오면서 이만큼 주웠어요",
      location: "북한산 | 서울특별시",
      discription:
        "sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum",
      state: "클린후기",
    },
  ],
};

export default initialState;
