import {Dispatch} from "redux";
import {Action, INIT_SET_USER_DATA, SET_USER_DATA} from "../actions";
import {APIinstance} from "./usersAPI";

export type authResponse = {
    messages: string[]
    isAuth: boolean
    resultCode: number
    data: {
        id: number
        email: string
        login: string

    }


}

export const AuthAPI = {
    checkIsUserAuth(dispatch: Dispatch<Action>) {
        return (async () => {
            try {

                const response = await APIinstance.get<authResponse>(`/auth/me`)
                if (response.data.resultCode === 0) {
                    dispatch(SET_USER_DATA(response.data))
                    dispatch(INIT_SET_USER_DATA(false))
                } else {
                    console.log(response.data.messages[0])
                }


            } catch (e) {
                console.log(e)
                dispatch(INIT_SET_USER_DATA(false))

            }
        })()
    }
}