import styled from "styled-components";
import {AppRoutes} from "./AppRoutes";
import {FC} from "react";

const StyledMain = styled.main`
  grid-area: main;
`;

export const Main: FC = () => {
    return (
        <StyledMain>

            <AppRoutes />

        </StyledMain>
    );
}
