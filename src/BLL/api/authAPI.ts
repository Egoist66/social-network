import {INIT_SET_USER_DATA, LOGOUT_USER, SET_USER_DATA, VALIDATE_LOGIN_FIELD} from "../actions";
import {APIinstance} from "./usersAPI";
import {AppThunk} from "../redux-store";

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

export type LogInOutResponse<T> = {
    resultCode: number
    messages: string[]
    data: T
}


export const CheckIsUserAuth = (): AppThunk => {
    return async (dispatch) => {
        try {

            const response = await APIinstance.get<authResponse>(`/auth/me`)

            if (response.data.resultCode === 0) {
                dispatch(SET_USER_DATA(response.data))
                dispatch(INIT_SET_USER_DATA(false))
            } else {
                console.log(response.data.messages[0])
                dispatch(SET_USER_DATA(response.data))
            }


        } catch (e) {
            console.log(e)
            dispatch(INIT_SET_USER_DATA(false))

        }
    }
}

export const LogIn = (email: string, password: string, remember: boolean): AppThunk => {
    return  async (dispatch) => {

        const {data} = await APIinstance.post<LogInOutResponse<{id: number}>>(
            '/auth/login',
            {email, password, remember}
        )

        if(data.resultCode === 0){
            dispatch(CheckIsUserAuth())
        }
        else {
            dispatch(VALIDATE_LOGIN_FIELD(data.messages[0]))

        }
    }
}
export const LogOut = (): AppThunk => {
    return  async (dispatch) => {
        const {data} = await APIinstance.delete<LogInOutResponse<{}>>('/auth/login')
        console.log(data)
        if(data.resultCode === 0){
            dispatch(LOGOUT_USER(false))

        }
        else {
            console.log(data)
        }
    }
}
