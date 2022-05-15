import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants";

export const requestLogin = (creds) => {
    return { type: LOGIN_REQUEST, creds }
}

export const successLogin = (response) => {
    return { type: LOGIN_SUCCESS, user: response.data }
}

export const errorLogin = (message) => {
    return { type: LOGIN_FAILURE, message }
}