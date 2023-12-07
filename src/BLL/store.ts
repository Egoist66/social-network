import {Action} from "./actions";
// import profileReducer, {profilePageProps} from "./reducers/profile-reducer";
// import dialogsPageReducer, {dialogsPageProps} from "./reducers/dialogs-reducer";
// import {Contacts, Photos} from "./api/profileAPI";
//
//
// export interface StoreType {
//     _state: {
//         _profilePage: profilePageProps
//         _dialogsPage: dialogsPageProps
//     }
//     _notifySubscribers: () => void,
//     subscribe: (observer: () => void) => void,
//     getStateSlice: (slice: '_profilePage' | '_dialogsPage') => any,
//     getState: () => StoreType['_state'],
//     dispatch: (action: Action) => void
//
// }
//
//
// const Store: StoreType = {
//     _state: {
//         _profilePage: {
//            userProfile: {
//                posts: [
//                    {id: crypto.randomUUID(), message: 'Hello, how are you guys?', likesCount: 3},
//                    {id: crypto.randomUUID(), message: 'Learning react is funny', likesCount: 10},
//                    {id: crypto.randomUUID(), message: 'Winter is coming sounds familiar', likesCount: 5},
//
//                ],
//            }
//
//
//         },
//         _dialogsPage: {
//             dialogs: [
//                 {id: '1', name: 'Vasya'},
//                 {id: '2', name: 'Igor'},
//                 {id: '3', name: 'Andrey'},
//                 {id: '4', name: 'Nastya'},
//                 {id: '5', name: 'Nikita'},
//                 {id: '6', name: 'Peter'},
//             ],
//
//             messages: [
//                 {id: '1', message: 'Hello'},
//                 {id: '2', message: 'How are you?'},
//                 {id: '3', message: 'I\'m fine thanks'},
//                 {id: '4', message: 'Tired and sad'},
//                 {id: '5', message: 'I love you'},
//                 {id: '6', message: 'What s up!'},
//
//             ]
//         },
//
//     },
//
//     getState() {
//         return this._state
//     },
//
//     subscribe(observer: () => void) {
//         // подписчик на обновление стора - принимает наблюдателя и следит и запускается
//         this._notifySubscribers = observer
//
//
//     },
//
//     _notifySubscribers() {
//         console.warn('No subscribers!')
//     },
//
//     getStateSlice(slice) {
//         // возвращает кусочек стора
//         if (slice === '_profilePage') {
//             return this._state['_profilePage']
//
//         } else if (slice === '_dialogsPage') {
//             return this._state['_dialogsPage']
//
//         } else {
//             throw new Error(`Unknown store property --${slice}--`)
//         }
//     },
//
//
//
//
//     dispatch(action) {
//         this.getState()._dialogsPage = dialogsPageReducer(
//             this.getState()._dialogsPage,
//             action
//         )
//         this.getState()._profilePage = profileReducer(
//             this.getState()._profilePage,
//             action
//         )
//
//         this._notifySubscribers()
//
//
//     }
// }
//
// //setGlobalProperty(window, [Store], 'store')
//
