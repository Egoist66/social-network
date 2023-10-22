import {ActionNames, Action} from "../actions";
import {dialogsPageProps} from "../store";
import {logActions, push, update} from "../../utils/utils";

const dialogsPageReducer = (state: dialogsPageProps, action: Action) : dialogsPageProps => {

    switch (action.type){
        case ActionNames.ADD_MESSAGE:

            logActions(action, action.type, action.payload)

            return  update(state, {
                name: 'messages',
                callback: push( {
                    id: crypto.randomUUID(),
                    message: action.payload.message
                })(state.messages)
            })


        default:
            return state
    }
}
export default dialogsPageReducer