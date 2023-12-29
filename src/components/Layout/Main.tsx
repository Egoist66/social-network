import styled from "styled-components";
import {AppRoutes} from "./AppRoutes";
import {FC, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../BLL/redux-store";

const StyledMain = styled.main`
  grid-area: main;
`;

export const Main: FC = () => {
    const navigate = useNavigate()
    const {isAuth} = useAppSelector(state => state.auth)
  

    return (
        <StyledMain>

            <AppRoutes />

        </StyledMain>
    );
}
