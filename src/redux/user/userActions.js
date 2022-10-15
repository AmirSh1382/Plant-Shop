const loginUserRequest = () => {
  return { type: "LOGIN_USER_REQUEST" };
};

const loginUserSuccess = (userName, password) => {
  return { type: "LOGIN_USER_SUCCESS", payload: { userName, password } };
};

const loginUserFailure = () => {
  return { type: "LOGIN_USER_FAILURE" };
};

const userLogOut = () => {
  return { type: "LOG_OUT" };
};

const signUpUserRequest = () => {
  return { type: "SIGN_UP_USER_REQUEST" };
};

const signUpUserSuccess = () => {
  return { type: "SIGN_UP_USER_SUCCESS" };
};

const signUpUserFailure = () => {
  return { type: "SIGN_UP_USER_FAILURE" };
};

export { loginUserRequest, loginUserSuccess, loginUserFailure, userLogOut };
export { signUpUserRequest, signUpUserSuccess, signUpUserFailure };