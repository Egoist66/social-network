import {ChangeEvent, FC, FormEvent, memo, useEffect, useState} from "react";
import styled from "styled-components";
import {View} from "../../../service-components/View/View";
import Wrapper from "../../../service-components/Wrapper/SectionWrapper";
import {AuthAPI} from "../../../BLL/api/authAPI";
import {useAppDispatch, useAppSelector} from "../../../BLL/redux-store";
import {useNavigate} from "react-router-dom";

const StyledLoginForm = styled.form`
`

const StyledInput = styled.input`

`

const StyledSubmit = styled.button``

type LoginStateProps = {
    email: string
    password: string
    remember: boolean
}
const Login: FC = () => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const navigate = useNavigate()
    const [data, setData] = useState<LoginStateProps>({
        email: 'FMahmudov1997@mail.ru',
        password: '',
        remember: true
    })

    useEffect(() => {
        if(isAuth){
            navigate('/profile')
        }
    }, [isAuth])
    const mapFields = (e: ChangeEvent<HTMLInputElement>) => {
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
    }

    const submitLogin = (e: FormEvent) => {
        e.preventDefault()
        AuthAPI.logIn(dispatch, data.email, data.password, data.remember)
    }

    return (
        <StyledLoginForm onSubmit={submitLogin}>

            <Wrapper _block>
                <View _margin={'0px 0px 10px 0px'}>
                    <StyledInput
                        value={data.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => mapFields(e)('email')}
                        required
                        type={'email'}
                        placeholder={'Enter your email'}
                    />


                </View>

                <View  _margin={'0px 0px 10px 0px'}>
                    <StyledInput
                        required
                        type={'password'}
                        value={data.password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => mapFields(e)('password')}
                        placeholder={'Enter your password'}
                    />

                </View>
                <View  _margin={'0px 0px 10px 0px'}>
                    <label>
                        <StyledInput
                            type={'checkbox'}
                            checked={data.remember}
                            value={data.remember ? 'true' : 'false'}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => mapFields(e)('remember')}

                        />
                        Remember me?
                    </label>
                </View>

                <StyledSubmit type={'submit'}>Log In</StyledSubmit>
            </Wrapper>

        </StyledLoginForm>
    )

}
export default memo(Login)