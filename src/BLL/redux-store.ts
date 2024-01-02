import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {setGlobalProperty} from "../utils/utils";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Action} from "./actions";
import {preloaded} from "./preloaded";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";


export type AppRootState = ReturnType<typeof rootReducer>
type AppDispatch = typeof store.dispatch

export type AppThunkDispatch = ThunkDispatch<AppRootState, unknown, AppActions>


export const useAppDispatch: () => AppThunkDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;



const middleWares = [thunk]
export const store = createStore(
    rootReducer,
    {profilePage: preloaded},
    composeWithDevTools(applyMiddleware(...middleWares)),
)


export type AppActions = Action
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootState,
    unknown,
    AppActions
>
setGlobalProperty(window, [store], 'store')
