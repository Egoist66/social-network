import {setGlobalProperty} from "../utils/utils";
import {Action} from "./actions";
import profileReducer from "./reducers/profile-reducer";
import dialogsPageReducer from "./reducers/dialogs-reducer";


export type profilePageProps = {
    posts: PostMessageItems[]
}
export type dialogsPageProps = {
    dialogs: DialogsItems[],
    messages: MessagesItems[]
}

export interface StoreType {
    _state: {
        _profilePage: profilePageProps
        _dialogsPage: dialogsPageProps
    }
    _notify: () => void,
    subscribe: (observer: () => void) => void,
    getStateSlice: (slice: '_profilePage' | '_dialogsPage') => any,
    getState: () => StoreType['_state'],
    dispatch: (action: Action) => void



}

export const Store: StoreType = {
    _state: {
        _profilePage: {
            posts: [
                {id: crypto.randomUUID(), message: 'Hello, how are you guys?', likesCount: 3},
                {id: crypto.randomUUID(), message: 'Learning react is funny', likesCount: 10},
                {id: crypto.randomUUID(), message: 'Winter is coming sounds familiar', likesCount: 5},

            ],


        },
        _dialogsPage: {
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
        },

    },

    getState() {
        return this._state
    },

    subscribe(observer: () => void) {
        // подписчик на обновление стора - принимает наблюдателя и следит и запускается
        this._notify = observer


    },

    getStateSlice(slice) {
        // возвращает кусочек стора
        if (slice === '_profilePage') {
            return this._state['_profilePage']

        } else if (slice === '_dialogsPage') {
            return this._state['_dialogsPage']

        } else {
            throw new Error(`Unknown store property --${slice}--`)
        }
    },

    _notify() {
        console.warn('No subscribers!')
    },


    dispatch(action) {

        this.getState()._dialogsPage = dialogsPageReducer(
            this.getState()._dialogsPage,
            action
        )
        this.getState()._profilePage = profileReducer(
            this.getState()._profilePage,
            action
        )

        this._notify()


    }
}

setGlobalProperty(window, [Store], 'store')

