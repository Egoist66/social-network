import {createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {setGlobalProperty} from "../utils/utils";
import {Store} from "./store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export type AppRootState = ReturnType<typeof rootReducer>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;

export const store = createStore(rootReducer, composeWithDevTools())

setGlobalProperty(window, [store], 'store')
