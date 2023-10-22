import {FC} from "react";
import styled from "styled-components";
import {useLocation, useParams} from "react-router-dom";
import Text from "../../service-components/Text/Text";

const StyledCurrentDialog = styled.div`

`

type ParamsType = {
    id: string
}

export const CurrentDialog: FC = () => {
    const params = useParams<ParamsType>()

    return (
        <StyledCurrentDialog>
            <Text type={'h2'}>User id: {params.id}</Text>
        </StyledCurrentDialog>
    )
}