import React, { useState } from "react";

// Components
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Form = () => {
  const [ signUpData, setSignUpData ] = useState({
    name: "",
    password: "",
  });

  const [ loginData, setLoginData ] = useState({
    name: "",
    password: "",
    isRemember: true,
  });

  const [ selectedForm, setSelectedForm ] = useState("login");

  return (
    <div className="flex flex-1 items-center justify-center max-w-6xl w-full gap-y-2 mt-20 mx-auto">
      <div
        className="max-w-sm w-full flex flex-col items-center justify-between
        border border-primary rounded-md gap-y-6 px-4 py-6 my-10 mx-5"
      >
        <div className="flex jusity-between gap-x-10">
          <div
            onClick={() => setSelectedForm("login")}
            className={`
              ${selectedForm === "login" ? "text-primary after:w-full" : "text-muted dark:text-mutedDark after:w-0"} 
              text-xl font-semibold cursor-pointer relative transition duration-300  after:content-[""] after:absolute
              after:bottom-0 after:left-0 after:h-[1px] after:bg-primary`}
          >
            ورود
          </div>
          <div
            onClick={() => setSelectedForm("signUp")}
            className={`
              ${selectedForm === "signUp" ? "text-primary after:w-full" : "text-muted dark:text-mutedDark after:w-0"} 
              text-xl font-semibold cursor-pointer relative transition duration-300 after:content-[""] after:absolute
              after:bottom-0 after:left-0 after:h-[1px] after:bg-primary`}
          >
            ثبت نام
          </div>
        </div>

        <div className="w-full flex overflow-hidden [&>*]:shrink-0">
          <div
            className={
              `${selectedForm === "signUp" && "translate-x-full"} w-full transition duration-300`}
          >
            <LoginForm loginData={loginData} setLoginData={setLoginData} />
          </div>

          <div
            className={
              `${selectedForm === "signUp" && "translate-x-full"} w-full transition duration-300`}
          >
            <SignUpForm
              signUpData={signUpData}
              setSignUpData={setSignUpData}
              setLoginData={setLoginData}
              setSelectedForm={setSelectedForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;