import {Dispatch} from "redux";
import {Action, INIT_SET_USER_DATA, LOGOUT_USER, SET_USER_DATA} from "../actions";
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

export type LogInOutResponse<T> = {
    resultCode: number
    messages: string[]
    data: T
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
    },

    logIn(dispatch: Dispatch<Action>, email: string, password: string, remember: boolean){
       return (async () => {

           const {data} = await APIinstance.post<LogInOutResponse<{id: number}>>(
               '/auth/login',
               {email, password, remember}
           )
           if(data.resultCode === 0){
               await this.checkIsUserAuth(dispatch)
           }
           else {
               console.log(data)
           }

       })()
    },
    logOut(dispatch: Dispatch<Action>){
       return (async () => {

           const {data} = await APIinstance.delete<LogInOutResponse<{}>>('/auth/login')
           console.log(data)
            if(data.resultCode === 0){
                dispatch(LOGOUT_USER(false))

            }
            else {
                console.log(data)
            }
       })()
    },
}