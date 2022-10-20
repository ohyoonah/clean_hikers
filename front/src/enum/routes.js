export const ROUTES = {
  HOME: "/",
  COMMUNITY: {
    ROOT: "/community",
    COMMUNITY_CREATE: "/community/communityCreate",
    COMMUNITY_DETAIL: "/community/communityDetail/:no",
    COMMUNITY_EDIT: `/community/communityDetail/communityEdit/:no`,
  },
  USER: {
    LOGIN: "/login",
    REGISTER: "/register",
    USER_PAGE: "/users/:userId",
  },
  MOUNTAIN: {
    DETAIL: "/detail",
    SEARCH: "/search",
  },
};
