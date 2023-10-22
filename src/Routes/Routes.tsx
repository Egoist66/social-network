import {CurrentDialog} from "../components/UI/CurrentDialog";
import Text from "../service-components/Text/Text";
import {FC, lazy, ReactNode} from "react";
import {DialogsProps} from "../components/UI/Dialogs";
import {ProfileProps} from "../components/UI/Profile";
import {Store} from "../BLL/store";


const LazyDialogs: FC<DialogsProps> = lazy(() => import('../components/UI/Dialogs'));
const LazyProfile: FC<ProfileProps> = lazy(() => import('../components/UI/Profile'));

const {getStateSlice, dispatch} = Store // тянем данные из стора
const {posts} = getStateSlice.bind(Store)('_profilePage') // биндим контекст так как внутри есть обращение через this
const {messages, dialogs} = getStateSlice.bind(Store)('_dialogsPage')


type RouteParts = {
    path: string,
    component: ReactNode | JSX.Element
}


export const routes: RouteParts[] = [
    {path: '/profile', component: <LazyProfile postData={posts} />},
    {path: '/messages', component: <LazyDialogs messagesData={messages} dialogsData={dialogs} />},
    {path: '/messages/:id', component: <CurrentDialog />},
    {path: '/news', component: <Text type={'h2'}>News</Text>},
    {path: '/music', component: <Text type={'h2'}>Music</Text>},
    {path: '/settings', component: <Text type={'h2'}>Settings</Text>},
    {path: '*', component: <Text type={'h2'}>404</Text>},
]