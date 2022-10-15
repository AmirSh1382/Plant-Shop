// Redux
import { loginUserSuccess } from "../redux/user/userActions";

// To validate login form
const loginValidation = formData => {
  const { name, password } = formData;

  const error = {};

  if (!name.trim()) {
    error.name = "نام کاربری ضروری است.";
  } else {
    delete error.name;
  }

  if (!password.trim()) {
    error.password = "رمز عبور ضروری است.";
  } else if (password.trim().length < 8) {
    error.password = "رمز عبور باید حداقل 8 کاراکتر باشد.";
  } else {
    delete error.password;
  }

  return error;
};

// To validate sign up form
const signUpValidation = formData => {
  const { name, password } = formData;

  const error = {};

  if (!name.trim()) {
    error.name = "نام کاربری ضروری است.";
  } else if (/\s/g.test(name)) {
    error.name = "نام کاربری نباید شامل فاصله باشد.";
  } else if (!/[A-z]/g.test(name)) {
    error.name = "نام کاربری باید شامل حروف انگلیسی باشد.";
  } else if (!/[A-Z]/g.test(name)) {
    error.name = "رمز عبور باید شامل حروف بزرگ انگلیسی باشد.";
  } else if (name.length < 8) {
    error.name = "نام کاربری باید حداقل 8 کاراکتر باشد.";
  } else {
    delete error.name;
  }

  if (!password.trim()) {
    error.password = "رمز عبور ضروری است.";
  } else if (/\s/g.test(password)) {
    error.password = "رمز عبور نباید شامل فاصله باشد.";
  } else if (!/[A-z]/g.test(password)) {
    error.password = "رمز عبور باید شامل حروف انگلیسی باشد.";
  } else if (!/[A-Z]/g.test(password)) {
    error.password = "رمز عبور باید شامل حروف بزرگ انگلیسی باشد.";
  } else if (password.trim().length < 8) {
    error.password = "رمز عبور باید حداقل 8 کاراکتر باشد.";
  } else if (!/[!@#$+%^&*]/g.test(password)) {
    error.password = "رمز عبور باید شامل یکی از کاراکتر های !@#$+%^&* باشد.";
  } else {
    delete error.password;
  }

  return error;
};

// To prevent creating accounts with similar usernames
const isThisUserNameTaken = (allUsers, mainUserName) => {
  return allUsers.find(user => user[1].name === mainUserName)
    ? true
    : false;
};

// To autherize the user
const userAuthentication = (allUsers, mainUser) => {
  return allUsers.find(user => {
    return (
      user[1].name === mainUser.name && user[1].password === mainUser.password
    );
  })
    ? true
    : false;
};

// To set user login info cookie
const setCookie = userData => {
  const { name, password } = userData;

  let now = new Date();

  now.setTime(now.getTime() + 3 * 24 * 60 * 60 * 1000);

  document.cookie = `username=${name};path=/;expires=${now}`;
  document.cookie = `password=${password};path=/;expires=${now}`;
};

// To remove user login info cookie
const removeCookie = (userName, password) => {
  let now = new Date();

  now.setTime(now.getTime() - 3 * 24 * 60 * 60 * 100000);

  document.cookie = `username=${userName};path=/;expires=${now}`;
  document.cookie = `password=${password};path=/;expires=${now}`;
};

// To get user login info from cookie
const getUserDataFromCookie = () => {
   const cookie = document.cookie.split("; ");
  
   const userName = cookie[0].split("=")[1];
   const password = cookie[1].split("=")[1];

   return loginUserSuccess(userName, password);
};

export { loginValidation, signUpValidation };
export { userAuthentication, isThisUserNameTaken };
export { setCookie, getUserDataFromCookie, removeCookie };