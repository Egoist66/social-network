import {Routes, Route} from 'react-router-dom'
import {FC, Suspense} from "react";
import Text from "../../service-components/Text/Text";
import {RoutesData} from "../../Routes/Routes";


export const AppRoutes: FC = () => {

    const {routes} = RoutesData()

    return (
        <Suspense fallback={<Text type={'h2'} centered={'true'}>Loading...</Text>}>
            <Routes>
                <Route index element={<Text type={'h1'}>Welcome to Go-Sound!</Text>}/>
                {routes.map(route => (
                    <Route key={crypto.randomUUID()} path={route.path} element={route.component} />
                ))}
            </Routes>
        </Suspense>

    )
}