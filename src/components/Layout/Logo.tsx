import React, {FC} from "react";
import styled from "styled-components";
import {View} from "../../service-components/View/View";
import {useNavigate} from "react-router-dom";

type LogoProps = {
    url: string
}

const StyledLogo = styled.img`
  width: 50px;
  cursor: pointer;

`

export const Logo:FC<LogoProps> = ({url}) => {
    const navigate = useNavigate()
    return (
        <View id={'logo'}>
            <StyledLogo onClick={() => navigate('/')} src={url} alt={Logo.name.toLowerCase()} />
        </View>
    )
}