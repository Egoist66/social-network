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
            return update(
                state,
                {name: 'posts', callback: push({
                        id: crypto.randomUUID(),
                        message: action.payload.text,
                        likesCount: 0
                    })(state.posts)}
            )


        default:
            return state
    }
}
export default profileReducer