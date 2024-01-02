import {createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {setGlobalProperty} from "../utils/utils";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Action, FETCH_PROFILE_DATA} from "./actions";
import {preloaded} from "./preloaded";
import {ThunkAction} from "redux-thunk";


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


export type AppActions = Action
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootState,
    unknown,
    AppActions
>
setGlobalProperty(window, [store, true], 'store')
