import {ActionNames, Action} from "../actions";
import {dialogsPageProps} from "../store";
import {logActions, push, update} from "../../utils/utils";


const initialState: dialogsPageProps = {
    dialogs: [
        {id: '1', name: 'Vasya'},
        {id: '2', name: 'Igor'},
        {id: '3', name: 'Andrey'},
        {id: '4', name: 'Nastya'},
        {id: '5', name: 'Nikita'},
        {id: '6', name: 'Peter'},
    ],


    messages: [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'I\'m fine thanks'},
        {id: '4', message: 'Tired and sad'},
        {id: '5', message: 'I love you'},
        {id: '6', message: 'What s up!'},

    ]
}

const dialogsPageReducer = (state = initialState, action: Action): dialogsPageProps => {

    
    switch (action.type) {
        case ActionNames.ADD_MESSAGE:

            logActions(action, action.type, action.payload)
            
            return {
                ...state,
                messages: [...state.messages, {
                    id: crypto.randomUUID(),
                    message: action.payload.message
                }],
           
            }


        default:
            return state
    }
}
export default dialogsPageReducer