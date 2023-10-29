import {ActionNames, Action} from "../actions";
import {profilePageProps} from "../store";
import {logActions, push, update} from "../../utils/utils";


const initialState: profilePageProps = {
    posts: [
        {id: crypto.randomUUID(), message: 'Hello, how are you guys?', likesCount: 3},
        {id: crypto.randomUUID(), message: 'Learning react is funny', likesCount: 10},
        {id: crypto.randomUUID(), message: 'Winter is coming sounds familiar', likesCount: 5},

    ],
}

const profileReducer = (state = initialState, action: Action): profilePageProps => {

    switch (action.type) {
        case ActionNames.ADD_POST:
            logActions(action, action.type, action.payload)
            
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: crypto.randomUUID(), likesCount: 0, message: action.payload.text}
                ]
            }


        default:
            return state
    }
}
export default profileReducer