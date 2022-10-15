const getLocalTheme = () => {
  return { type: "GET_LOCAL_THEME" };
};

const changeThemeAction = theme => {
  return { type: "CHANGE_THEME", payload: theme };
};

export { getLocalTheme, changeThemeAction };