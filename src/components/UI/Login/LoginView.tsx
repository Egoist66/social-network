import {ChangeEvent, FC, FormEvent, memo} from "react";
import Wrapper from "../../../service-components/Wrapper/SectionWrapper";
import {View} from "../../../service-components/View/View";
import Text from "../../../service-components/Text/Text";
import styled from "styled-components";
import {LoginStateProps} from "./Login";

const StyledLoginForm = styled.form`
`

const StyledInput = styled.input`

`

const StyledSubmit = styled.button``


type LoginViewProps = {
    message: string,
    data: LoginStateProps,
    submitLogin: (e: FormEvent) => void
    mapFields: (e: ChangeEvent<HTMLInputElement>) => (field: 'email' | 'password' | 'remember') => void

}

export const LoginView: FC<LoginViewProps> = memo(({message, mapFields, submitLogin, data}) => {
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

            <Text _color={'red'}>{message}</Text>
        </StyledLoginForm>
    )
})