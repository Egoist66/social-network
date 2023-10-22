import styled from "styled-components";
import {FC, ReactNode} from "react";

type ViewProps = {
    _margin?: string
    _align?: 'center' | 'left' | 'right'
    id?: string
    children: ReactNode
}

const StyledView = styled.div<ViewProps>`
  margin: ${props => props._margin};
  text-align: ${props => props._align};
`

export const View: FC<ViewProps> = ({id, _align, children, _margin}) => {
    return (
        <StyledView id={id} _align={_align} _margin={_margin}>{children}</StyledView>
    )
}