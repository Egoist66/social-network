import {Action, ActionNames} from "../actions";

type initialStateType = {

    isAuth: boolean
    messages: string[]
    resultCode: 1
    data: {
        id: number
        email: string
        login: string

    }
    isFetching: boolean
}

const initialState: initialStateType = {

    messages: [],
    isAuth: false,
    resultCode: 1,
    data: {
        id: 0,
        email: '',
        login: '',

    },
    isFetching: true
}
export const authReducer = (state = initialState, action: Action) => {
    switch (action.type) {

        case ActionNames.INIT_SET_USER_DATA: {
            return  {
                ...state,
                isFetching: action.payload.isFetching
            }
        }

        case ActionNames.SET_USER_DATA: {
            const {data} = action.payload

            return  {
                ...state,
                data: data.data,
                isAuth: data.resultCode === 0,
                resultCode: data.resultCode,
                messages: data.messages



            }
        }

        default: {
            return state
        }
    }
}