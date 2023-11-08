import styled from "styled-components";
import {FC} from "react";

const StyledAvatar = styled.img`
  object-fit: cover;
  border-radius: 7px;

`

export const Avatar: FC<{src?: string, width: number}> = ({src, width}) => {
    return (
        <StyledAvatar width={width} src={src ?? 'https://яумею.com/uploads/small-%D0%B7%D0%B0%D0%B3%D0%BB%D1%83%D1%88%D0%BA%D0%B0-ptifxd-1558426986313.png'} />
    )
}