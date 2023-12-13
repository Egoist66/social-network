import React, {FC} from 'react'
import {Sidebar} from "./Sidebar";
import {Main} from "./Main";
import {LWrapper} from "../../service-components/LayoutWrapper/LWrapper";
import Header from "./HeaderContainer";

export const Layout: FC = () => {

    return (
        <LWrapper>

            <Header />
            <Sidebar/>
            <Main />

        </LWrapper>
    )

}

