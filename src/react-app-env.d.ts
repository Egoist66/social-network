/// <reference types="react-scripts" />

type DialogsItems = {
    id: string
    name: string
}

type MessagesItems = {
    id: string,
    message: string
}

type PostMessageItems = {
    id: string
    message: string,
    likesCount: number
}


type BLLProps = {
    postData?: PostMessageItems[]
    messagesData?: MessagesItems[]
    dialogsData? : DialogsItems[]
}