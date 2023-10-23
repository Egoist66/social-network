import {createContext, FC, ReactNode, useContext} from "react";
import {store} from "../redux-store";
import {ADD_MESSAGE, ADD_POST} from "../actions";

interface AppContext {
    profilePage: {
        posts: PostMessageItems[]
        addPost: (text: string) => void
    },
    dialogsPage: {
        messages: MessagesItems[]
        dialogs: DialogsItems[]
        addMessage: (message: string) => void
    }
}


const AppContext = createContext<AppContext>({} as AppContext)
export const useAppContext = () => {

    return useContext(AppContext)
}


export const AppProvider: FC<{children: ReactNode}> = ({children}) => {

     const state: AppContext = {
         profilePage: {
             posts: store.getState().profilePage.posts,
             addPost: (text: string) => {
                 store.dispatch(ADD_POST(text))
             }
         },

         dialogsPage: {
             messages: store.getState().dialogsPage.messages,
             dialogs: store.getState().dialogsPage.dialogs,
             addMessage: (message: string) => {
                 store.dispatch(ADD_MESSAGE(message))

             }
         }
     }



    return (

        <AppContext.Provider value={state}>

            {children}

        </AppContext.Provider>
    )
}