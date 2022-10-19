export function loginReducer(userState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...userState,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...userState,
        user: null,
      };
    case "IMAGE_CHANGE":
      return {
        ...userState,
        user: action.payload,
      };

    default:
      return userState;
  }
}
