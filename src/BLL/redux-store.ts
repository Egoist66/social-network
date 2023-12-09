import {createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {setGlobalProperty} from "../utils/utils";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {FETCH_PROFILE_DATA} from "./actions";
import {preloaded} from "./preloaded";


export type AppRootState = ReturnType<typeof rootReducer>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;

export const store = createStore(
    rootReducer,
    {
        profilePage: preloaded
    },
    composeWithDevTools(),
)

setGlobalProperty(window, [store], 'store')
