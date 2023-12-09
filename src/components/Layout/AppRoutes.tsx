import {Route, Routes} from 'react-router-dom'
import {FC, Suspense} from "react";
import Text from "../../service-components/Text/Text";
import {RoutesData} from "../../Routes/Routes";
import {Spinner} from "../../service-components/Preloader/Preloader";


export const AppRoutes: FC = () => {

    const {routes} = RoutesData()

    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route index element={<Text type={'h1'}>Welcome to Go-Sound!</Text>}/>
                {routes.map(route => (
                    <Route key={crypto.randomUUID()} path={route.path} element={route.component} />
                ))}
            </Routes>
        </Suspense>

    )
}