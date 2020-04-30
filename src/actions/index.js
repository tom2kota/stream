import {SIGN_IN, SIGN_OUT} from "./types";

export const signIn = (userId) => {
    console.log('action signIn()')
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    console.log('action signOut()')
    return {
        type: SIGN_OUT
    }
}