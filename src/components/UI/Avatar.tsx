import styled from "styled-components";
import {FC} from "react";

const StyledAvatar = styled.img`
  width: 200px;
  object-fit: cover;
  border-radius: 7px;

`

export const Avatar: FC = () => {
    return (
        <StyledAvatar src="https://i.pinimg.com/originals/11/61/1b/11611b0d9bc7ef5123366050e1c40a94.png" />
    )
}