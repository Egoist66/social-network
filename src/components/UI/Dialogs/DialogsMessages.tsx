import {FC} from "react";
import Text from "../../../service-components/Text/Text";
import styled from "styled-components";


const UserDialogMessages = styled.div`
  margin-bottom: 15px;
`

type DialogsMessagesProps = {
    message: string
    id: string
}

export const DialogsMessages: FC<DialogsMessagesProps> = ({message, id}) => {
    return (
        <UserDialogMessages id={id}>

            <Text _margin={'0px'}>{message}</Text>

        </UserDialogMessages>
    )
}