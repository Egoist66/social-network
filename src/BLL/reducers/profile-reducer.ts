import {ActionNames, Action} from "../actions";
import {profilePageProps} from "../store";
import {logActions, push, update} from "../../utils/utils";

const profileReducer = (state: profilePageProps, action: Action): profilePageProps => {

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