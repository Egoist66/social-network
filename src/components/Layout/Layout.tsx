import React, {FC} from 'react'
import {Header} from "./Header";
import {Sidebar} from "./Sidebar";
import {Main} from "./Main";
import {LWrapper} from "../../service-components/LayoutWrapper/LWrapper";

export const Layout: FC = () => {

    return (
        <LWrapper>

            <Header/>
            <Sidebar/>
            <Main />

        </LWrapper>
    )

}

