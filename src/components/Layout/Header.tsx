import styled from "styled-components";
import React, {FC} from 'react'
import {Logo} from "../UI/Logo";
import Text from "../../service-components/Text/Text";

const StyledHeader = styled.header`

  grid-area: header;
  background-color: #8952f7;
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 15px;
  border-radius: 7px;



`

export const Header: FC = () => {
    return (
        <StyledHeader>
            <Logo url={'https://cdn-icons-png.flaticon.com/512/515/515653.png'} />
            <Text type={'h1'} _color={'#fff'}>Go-Sound</Text>
        </StyledHeader>
    )
}