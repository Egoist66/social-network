import {FC} from "react";
import {styled} from "styled-components";
import {NavLink} from "react-router-dom";

const DialogsItems = styled.li`
  padding: 0px;
  margin-bottom: 10px;
`

type DialogsRouteItemsProps = {
    id: string,
    name: string
}
export const DialogsRouteItems: FC<DialogsRouteItemsProps> = ({id, name}) => {
    return (
        <DialogsItems>

            <NavLink to={`/messages/${id}`}>{name}</NavLink>

        </DialogsItems>
    )
}