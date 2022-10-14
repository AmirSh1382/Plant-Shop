const loginValidation = formData => {
    const { name, password } = formData

    const error = {}

    if (!name.trim()) {
        error.name = "نام کاربری ضروری است."
    } else {
        delete error.name
    }

    if (!password.trim()) {
        error.password = "رمز عبور ضروری است."
    } else if (password.trim().length < 8) {
        error.password = "رمز عبور باید حداقل 8 کاراکتر باشد."
    } else {
        delete error.password
    }

    return error
}

const signUpValidation = formData => {
    const { name, password } = formData

    const error = {}

    if (!name.trim()) {
        error.name = "نام کاربری ضروری است."
    } else if (/\s/g.test(name)) {
        error.name = "نام کاربری نباید شامل فاصله باشد."
    } else if (!/[A-z]/g.test(name)) {
        error.name = "نام کاربری باید شامل حروف انگلیسی باشد."
    } else if (!/[A-Z]/g.test(name)) {
        error.name = "رمز عبور باید شامل حروف بزرگ انگلیسی باشد."
    } else if (name.length < 8) {
        error.name = "نام کاربری باید حداقل 8 کاراکتر باشد."
    } else {
        delete error.name
    }

    if (!password.trim()) {
        error.password = "رمز عبور ضروری است."
    } else if (/\s/g.test(password)) {
        error.password = "رمز عبور نباید شامل فاصله باشد."
    } else if (!/[A-z]/g.test(password)) {
        error.password = "رمز عبور باید شامل حروف انگلیسی باشد."
    } else if (!/[A-Z]/g.test(password)) {
        error.password = "رمز عبور باید شامل حروف بزرگ انگلیسی باشد."
    } else if (password.trim().length < 8) {
        error.password = "رمز عبور باید حداقل 8 کاراکتر باشد."
    } else if (!/[!@#$+%^&*]/g.test(password)) {
        error.password = "رمز عبور باید شامل یکی از کاراکتر های !@#$+%^&* باشد."
    } else {
        delete error.password
    }

    return error
}

export { loginValidation, signUpValidation }