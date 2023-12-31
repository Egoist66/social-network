import CurrentDialog from "../components/UI/Dialogs/CurrentDialog";
import Text from "../service-components/Text/Text";
import {FC, lazy, ReactNode} from "react";

type RouteParts = {
    path: string,
    component: ReactNode | JSX.Element
}

const LazyDialogs: FC = lazy(() => import('../components/UI/Dialogs/DialogsContainer'));
export const LazyProfile = lazy(() => import('../components/UI/Profile/Profile'));
const LazyUsers = lazy(() => import('../components/UI/Users/UsersContainer'));
const LazyLogin = lazy(() => import('../components/UI/Login/Login'));

export const RoutesData = () => {

    const routes: RouteParts[] = [

        {path: '/profile/:id', component: <LazyProfile  />},
        {path: '/profile', component: <LazyProfile  />},
        {path: '/users', component: <LazyUsers/>},
        {path: '/messages', component: <LazyDialogs/>},
        {path: '/messages/:id', component: <CurrentDialog/>},
        {path: '/login', component: <LazyLogin/>},
        {path: '/news', component: <Text type={'h2'}>News</Text>},
        {path: '/music', component: <Text type={'h2'}>Music</Text>},
        {path: '/settings', component: <Text type={'h2'}>Settings</Text>},
        {path: '*', component: <Text type={'h2'}>404</Text>},
    ]
    return {
        routes
    }
}









