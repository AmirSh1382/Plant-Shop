import React from "react";

const About = () => {
  return (
    <div
      style={{ direction: "ltr" }}
      className="max-w-sm w-full mt-32 mb-12 px-9 mx-auto"
    >
      <div>
        <div className="text-primary text-lg font-semibold">
            Project Tech Stack and Utilities :
        </div>
        <div className="flex flex-col gap-y1 pl-3">
            <span>React Js</span>
            <span>Tailwind css</span>
            <span>Pure css</span>
            <span>Bootstrap Icons</span>
            <span>Redux state manager - React Redux</span>
        </div>
      </div>
      <div className="mt-3">
        <div className="text-primary text-lg font-semibold">
            API :
        </div>
        <div className="flex flex-col gap-y1 pl-3">
            <span>Hygraph (GraphQL Api) - for products</span>
            <span>Google Firebase for User Authentication</span>
        </div>
      </div>
      <div className="mt-3">
        <div className="text-primary text-lg font-semibold">
            Developer :
        </div>
        <div className="flex flex-col gap-y1 pl-3">
            <div>
                <span className="text-primary text-lg">Fullname :</span>
                <span> Amir Shafikhani</span>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;