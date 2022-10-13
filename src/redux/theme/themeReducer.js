// Function
import { getLocalThemeInfo, setNewThemeIntoLocalStorage } from "../../helper/functions";

const initialState = {
  darkMode: false,
};

const themeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_LOCAL_THEME":
      return {
        ...state,
        darkMode: getLocalThemeInfo(),
      };

    case "CHANGE_THEME":
      setNewThemeIntoLocalStorage(payload)
      return {
        ...state,
        darkMode: payload,
      };

    default:
      return state;
  }
};

export default themeReducer;