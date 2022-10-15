import React, { useState, useEffect } from "react";

// Componenets
import Input from "./Input";

// react-router-dom
import { useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loginUserRequest, loginUserSuccess, loginUserFailure } from "../../redux/user/userActions";

// Functions
import { setCookie, userAuthentication } from "../../helper/validate";
import { loginValidation } from "../../helper/validate";

// Axios
import axios from "axios";

// React-toastify
import { toast } from "react-toastify";

const LoginForm = ({ loginData, setLoginData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userState = useSelector(state => state.userState);
  const { loading } = userState;

  const [ touch, setTouch ] = useState({});
  const [ error, setError ] = useState({});

  const loginUser = async () => {
    if (Object.entries(error).length) {
      setTouch({
        name: true,
        password: true,
      });
    } else {
      dispatch(loginUserRequest());

      try {
        const responde = await axios.get("https://plant-shop-b9a38-default-rtdb.firebaseio.com/users.json");
        const allUsers = Object.entries(responde.data);

        if (userAuthentication(allUsers, loginData)) {
          dispatch(loginUserSuccess(loginData.name, loginData.password));

          loginData.isRemember && setCookie(loginData);

          toast.success("ورود به اکانت با موفقیت انجام شد :)");

          navigate("/store");
        } else {
          toast.error("نام کاربری یا رمز عبور اشتباه است.")
          dispatch(loginUserFailure());
        }
      } catch (error) {
        dispatch(loginUserFailure());
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    setError(loginValidation(loginData));
  }, [loginData]);

  return (
    <div className="flex flex-col gap-y-5 pt-5">
      <div>
        <Input
          id="loginUserName"
          name="name"
          label="نام کاربری"
          error={error}
          value={loginData}
          setValue={setLoginData}
          touch={touch}
          setTouch={setTouch}
        />
      </div>

      <div>
        <Input
          id="loginPassword"
          name="password"
          label="رمز عبور"
          error={error}
          value={loginData}
          setValue={setLoginData}
          isTouched={touch}
          setTouch={setTouch}
          touch={touch}
        />
      </div>

      <div className="flex items-center mr-1">
        <input
          type="checkbox"
          id="rememberMe"
          checked={loginData.isRemember}
          onChange={e => setLoginData({ ...loginData, isRemember: e.target.checked })}
          className="w-4 h-4 text-green-600 bg-gray-300 rounded cursor-pointer border-gray-300
              focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-gray-800
              focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-primary"
        />
        <label
          htmlFor="rememberMe"
          className="text-md font-medium cursor-pointer text-gray-900 dark:text-gray-300 mr-2"
        >
          من را به خاطر بسپار.
        </label>
      </div>

      <div className="flex justify-center pt-4">
        <button
          onClick={loginUser}
          disabled={loading ? true : false}
          className="flex items-center justify-center bg-primary text-white text-xl
            transition rounded-md hover:bg-primaryHover w-32 h-9"
        >
          <span className={`${!loading ? "block" : "hidden"}`}>ورود</span>

          {/* Loader */}
          <span
            className={`${loading ? "block" : "hidden"}
            border-2 w-6 h-6 rounded-full border-[rgba(256,256,256,0.3)] border-t-white animate-spin`}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;