import styled from "styled-components";
import {ChangeEvent, FC, ReactNode} from "react";

type TextAreaPropsType = {
    value: string
    onChangeHandler: (value: string) => void
    placeHolder: string
    disabled?: boolean
    id?: string
    width?: string
    dataValue?: string
    children?: ReactNode
}

const StyledTextArea = styled.textarea<{width?: string}>`
  width: ${props => props.width || '100%'};
  min-height: 100px;
  resize: none;
  outline: none;
  background-color:  #eae7f7;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 7px;



`

export const TextArea: FC<TextAreaPropsType> = ({dataValue, width, value, placeHolder, onChangeHandler, id, disabled, children}) => {

    const handleValue = () => {
        return (e: ChangeEvent<HTMLTextAreaElement>) => {
            onChangeHandler(e.currentTarget.value)
        }
    }

    return (
        <StyledTextArea
        id={id}
        width={width}
        data-value={dataValue}
        value={value}
        placeholder={placeHolder}
        onChange={handleValue()}
        disabled={disabled}

        >

            {children}
        </StyledTextArea>
    )
}