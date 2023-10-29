import { FC, FormEvent } from "react"
import Button from "../../../service-components/Button/Button"
import { TextArea } from "../../../service-components/TextArea/TextArea"
import styled from "styled-components"

type DialogsFormProps = {
    createMessage?: (message: string, callback: (value: string) => void) => void
    message: string
    setMessage: (message: string) => void
}

const StyledForm = styled.form`
    
    display: inline-flex;
    align-items: center;
    gap: 20px;


`

export const DialogsForm: FC<DialogsFormProps> = ({createMessage, message, setMessage}) => {
    return (
        
        <StyledForm onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if(createMessage){
                createMessage(message, setMessage)
            }

        }}>

            <TextArea
                width={'100%'}
                value={message}
                dataValue={message}
                onChangeHandler={setMessage}
                placeHolder={'Enter a message'}
            />

            <Button
                type="submit"
                width="120px"
                disabled={message.length <= 0}
                text={'Send'}
            />


        </StyledForm>
    )
}