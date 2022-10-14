import React, { useState, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux"; 
import { signUpUserRequest, signUpUserSuccess, signUpUserFailure } from "../../redux/user/userActions"

// Components
import Input from "./Input";

// Functions
import { isThisUserNameTaken } from "../../helper/functions";
import { signUpValidation } from "../../helper/validate";

// UUID
import { v4 as uuidv4 } from 'uuid';

// Axios
import axios from "axios";
import { toast } from "react-toastify";

const SignUpForm = ({ signUpData, setSignUpData, setLoginData, setSelectedForm }) => {
  const dispatch = useDispatch()

  const [touch, setTouch] = useState({});
  const [error, setError] = useState({});

  const userState = useSelector(state => state.userState)
  const { loading } = userState

  const signUpUser = async () => {
    if (Object.entries(error).length) {
      setTouch({
        name: true,
        password: true
      })
    } else {
      const newUser = {
        id: uuidv4(),
        name: signUpData.name,
        password: signUpData.password,
      }

      dispatch(signUpUserRequest())

      try {
        const response = await axios.get("https://plant-shop-b9a38-default-rtdb.firebaseio.com/users.json")
        const allUsers = Object.entries(response.data)

        // To check that if this username is taken before or not
        if (isThisUserNameTaken(allUsers, newUser.name)) {
          dispatch(signUpUserFailure())
          toast.error("این نام کاربری قبلا انتخاب شده است.")
        } else {
          await axios.post("https://plant-shop-b9a38-default-rtdb.firebaseio.com/users.json", newUser)
          dispatch(signUpUserSuccess())
  
          setLoginData({
            name: signUpData.name,
            password: signUpData.password,
            isRemember: true
          })
  
          setSelectedForm("login")
        }
      } catch (error) {
        dispatch(signUpUserFailure())
        toast.error(error.message)
      }
    }
  }

  useEffect(() => {
    setError(signUpValidation(signUpData));
  }, [signUpData]);

  return (
    <div className="flex flex-col gap-y-5 pt-5">
      <div>
        <Input
          id="signUpUserName"
          name="name"
          label="نام کاربری"
          error={error}
          value={signUpData}
          setValue={setSignUpData}
          touch={touch}
          setTouch={setTouch}
        />
      </div>

      <div>
        <Input
          id="signUpPassword"
          name="password"
          label="رمز عبور"
          error={error}
          value={signUpData}
          setValue={setSignUpData}
          isTouched={touch}
          setTouch={setTouch}
          touch={touch}
        />
      </div>

      <div className="flex items-center mr-1">
        <input 
          checked
          disabled
          type="checkbox"
          className="w-4 h-4 text-green-600 bg-gray-300 rounded opacity-50 border-gray-300
              focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-gray-800
              focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-primary"
        />
        <label className="text-md font-medium cursor-pointer text-gray-900 dark:text-gray-300 mr-2">
          من 
          &nbsp;
          <span className="text-primary">شرایط خدمات</span>
          &nbsp;
          را قبول میکنم.
        </label>
      </div>

      <div className="flex justify-center pt-4">
        <button 
          onClick={signUpUser}
          disabled={loading ? true : false}
          className="flex items-center justify-center bg-primary text-white text-xl
            transition rounded-md hover:bg-primaryHover w-32 h-9"
        >
          <span className={`${!loading ? "block" : "hidden"}`}>
            ثبت نام
          </span>

          {/* Loader */}
          <span className={`${loading ? "block" : "hidden"}
            border-2 w-6 h-6 rounded-full border-[rgba(256,256,256,0.3)] border-t-white animate-spin`}
          >
          </span>
        </button>
      </div>

    </div>
  );
};

export default SignUpForm;