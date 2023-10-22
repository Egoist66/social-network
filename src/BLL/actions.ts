export enum ActionNames {
    ADD_POST = 'ADD_POST',
    ADD_MESSAGE = 'ADD_MESSAGE'
}

export type AddPostAction = {
    type: ActionNames.ADD_POST,
    payload: {
        text: string
    }
}

export type AddMessageAction = {
    type: ActionNames.ADD_MESSAGE
    payload: {
        message: string
    }
}

export const ADD_POST = (text: string): AddPostAction =>
    ({type: ActionNames.ADD_POST, payload: {text}})

export const ADD_MESSAGE = (message: string): AddMessageAction =>
    ({type: ActionNames.ADD_MESSAGE, payload: {message}})


export type Action = AddPostAction | AddMessageAction
