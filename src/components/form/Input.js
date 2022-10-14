import React, { useState } from "react";

// Styles
import styles from "../../styles/Input.module.css"

const Input = ({ id, name, label, value, setValue, touch, setTouch, error }) => {

  const [ isInputActive, setIsInputActive ] = useState(false)

  const changeHandler = e => {
    if(e.target.name === "isRemember") {
      setValue({...value, [e.target.name]: e.target.checked})
    }
    setValue({...value, [e.target.name]: e.target.value})
  }

  const focusHandler = e => {
    setIsInputActive(true)

    setTouch({...touch, [e.target.name]: true})
  }

  return (
    <div>
      <div className="relative flex flex-col items-center">
        <label
          htmlFor={id}
          className={`
            ${styles.label}
            ${isInputActive && styles.active}
            ${error[name] && touch[name] && styles.error}
            bg-white text-label dark:text-labelDark dark:bg-black`
          }
        >
          {label}
        </label>

        <input
          id={id}
          name={name}
          type="text"
          value={value[name]}
          onFocus={focusHandler}
          onChange={changeHandler}
          onBlur={() => !value[name] && setIsInputActive(false)}
          className={`
            ${styles.input}
            ${error[name] && touch[name] && styles.error}
            bg-white text-black border-input dark:border-inputDark 
            dark:bg-black dark:text-white focus:ring-transparent rounded-md`
          }
        />
      </div>
      <div className="text-sm mt-1 mr-1 h-5 text-red-500">
        {error[name] && touch[name] && error[name]}
      </div>
    </div>
  );
};

export default Input;