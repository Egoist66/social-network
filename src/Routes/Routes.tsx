import CurrentDialog from "../components/UI/Dialogs/CurrentDialog";
import Text from "../service-components/Text/Text";
import {FC, lazy, ReactNode} from "react";
import Users from "../components/UI/Users/Users";

type RouteParts = {
    path: string,
    component: ReactNode | JSX.Element
}

const LazyDialogs: FC = lazy(() => import('../components/UI/Dialogs/DialogsContainer'));
const LazyProfile: FC = lazy(() => import('../components/UI/Profile/Profile'));

export const RoutesData = () => {

    const routes: RouteParts[] = [
        {path: '/profile', component: <LazyProfile />},
        {path: '/users', component: <Users />},
        {path: '/messages', component: <LazyDialogs />},
        {path: '/messages/:id', component: <CurrentDialog />},
        {path: '/news', component: <Text type={'h2'}>News</Text>},
        {path: '/music', component: <Text type={'h2'}>Music</Text>},
        {path: '/settings', component: <Text type={'h2'}>Settings</Text>},
        {path: '*', component: <Text type={'h2'}>404</Text>},
    ]
    return {
        routes
    }
}









