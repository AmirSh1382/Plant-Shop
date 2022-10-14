const initialState = {
    loading: false,
    isLogedIn: false,
    userName: "",
    passWord: "",
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type) {
        case "LOGIN_USER_REQUEST":
            return {
                ...state,
                loading: true
            }

        case "LOGIN_USER_SUCCESS":
            return {
                ...state,
                isLogedIn: true,
                userName: payload.userName,
                passWord: payload.passWord,
                loading: false
            }

        case "LOGIN_USER_FAILURE":
            return {
                ...state,
                isLogedIn: false,
                loading: false,
            }

        case "LOGIN_USER_WITH_COOKIE":
            return {
                ...state,
                isLogedIn: true,
                userName: payload.userName,
                passWord: payload.passWord,
            }

        case "LOG_OUT":
            return {
                ...state,
                isLogedIn: false,
                userName: "",
                passWord: "",
            }

        case "SIGN_UP_USER_REQUEST":
            return {
                ...state,
                loading: true
            }

        case "SIGN_UP_USER_SUCCESS":
            return {
                ...state,
                loading: false
            }

        case "SIGN_UP_USER_FAILURE":
            return {
                ...state,
                loading: false,
            }

        default:
            return state
    }
}

export default userReducer