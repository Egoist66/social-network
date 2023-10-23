import {FC} from "react";
import {DialogsMessages} from "./DialogsMessages";


type MessagesPropsType = {
    messages?: MessagesItems[]
}
export const Messages: FC<MessagesPropsType> = ({messages}) => {

    return (
        <>

            {messages ? messages?.map(m => (
                <DialogsMessages id={m.id} key={m.id} message={m.message}/>
            )): 'no data'}


        </>
    )
}

