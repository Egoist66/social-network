import {FC} from "react";
import {DialogsMessages} from "./DialogsMessages";
import {DialogsProps} from "./Dialogs";



export const Messages: FC<DialogsProps> = ({messagesData}) => {

    return (
        <>

            {messagesData ? messagesData?.map(m => (
                <DialogsMessages id={m.id} key={m.id} message={m.message}/>
            )): 'no data'}


        </>
    )
}

