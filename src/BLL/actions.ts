export enum ActionNames {
    ADD_POST = 'ADD_POST',
    ADD_MESSAGE = 'ADD_MESSAGE'
}

type AddPostAction = ReturnType<typeof ADD_POST>
type AddMessageAction = ReturnType< typeof ADD_MESSAGE>

export const ADD_POST = (text: string) =>
({type: ActionNames.ADD_POST, payload: {text}}) as const

export const ADD_MESSAGE = (message: string) =>
    ({type: ActionNames.ADD_MESSAGE, payload: {message}}) as const


export type Action = AddPostAction | AddMessageAction
