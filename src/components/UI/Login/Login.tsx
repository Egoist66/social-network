import {ChangeEvent, FC, FormEvent, memo, useCallback, useEffect, useState} from "react";
import {CheckIsUserAuth, LogIn} from "../../../BLL/api/authAPI";
import {useAppDispatch, useAppSelector} from "../../../BLL/redux-store";
import {useNavigate} from "react-router-dom";
import {LoginView} from "./LoginView";

export type LoginStateProps = {
    email: string
    password: string
    remember: boolean
}
const Login: FC = () => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const message = useAppSelector(state => state.auth.messages[0])

    const navigate = useNavigate()
    const [data, setData] = useState<LoginStateProps>({
        email: 'FMahmudov1997@mail.ru',
        password: '',
        remember: true
    })

    useEffect(() => {
        if(!isAuth){
            dispatch(CheckIsUserAuth())

            return

        }

        if(isAuth){
            
            navigate('/profile')
            return
        }
    }, [isAuth])
    const mapFields = useCallback((e: ChangeEvent<HTMLInputElement>) => {
       return ( field: 'email' | 'password' | 'remember') => {
           switch (field) {
               case "email": {
                   setData({
                       ...data,
                       email: e.currentTarget.value.trim()
                   })
                   break
               }
               case "password": {
                   setData({
                       ...data,
                       password: e.currentTarget.value.trim()
                   })
                   break
               }

               case "remember": {
                   setData({
                       ...data,
                       remember: e.currentTarget.checked
                   })
                   break
               }
           }
       }
    }, [])

    const submitLogin = useCallback((e: FormEvent) => {
        e.preventDefault()
        dispatch(LogIn(data.email, data.password, data.remember))

    }, [data.email, data.password, data.remember])

    return (
       <LoginView
        data={data}
        mapFields={mapFields}
        message={message}
        submitLogin={submitLogin}
       />
    )

}
export default memo(Login)