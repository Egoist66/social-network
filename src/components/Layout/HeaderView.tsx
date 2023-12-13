import styled from "styled-components";
import React, {FC, ReactNode, useEffect, useState} from 'react'
import {Logo} from "./Logo";
import Text from "../../service-components/Text/Text";
import {View} from "../../service-components/View/View";
import {HeaderPageProps} from "./HeaderContainer";
import {NavLink} from "react-router-dom";

const StyledHeader = styled.header`

  grid-area: header;
  background-color: #8952f7;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  padding: 15px;
  border-radius: 7px;

  #logo-block {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  a {
    color: white;
  }

`


export const HeaderView: FC<HeaderPageProps> = ({auth, isFetching}) => {

    const [loginText, setLoginText] = useState<ReactNode>('')

    const showLogin = () => {

        const result = auth?.isAuth ?
            <Text _color={'#fff'}>Logged In - {auth.data.login}</Text> :
            <NavLink to={'/login'}>Login</NavLink>

        setLoginText(result)
    }

    useEffect(() => {
        showLogin()


    }, [auth?.resultCode])

    return (
        <StyledHeader>
            <View id={'logo-block'}>
                <Logo url={'https://cdn-icons-png.flaticon.com/512/515/515653.png'}/>
                <Text type={'h1'} _color={'#fff'}>Go-Sound</Text>

            </View>

            <View id={'login'}>{loginText}</View>
        </StyledHeader>
    )
}