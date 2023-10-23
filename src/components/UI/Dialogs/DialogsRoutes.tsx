import {FC} from "react";
import {styled} from "styled-components";
import {DialogsRouteItems} from "./DialogsRouteItems";


const PeopleDialogs = styled.ul`

`

type DialogsRoutesProps = {
    dialogs?: DialogsItems[]

}



export const DialogsRoutes: FC<DialogsRoutesProps> = ({dialogs}) => {

    return (
        <PeopleDialogs className={'dialogs'}>
            {dialogs ? dialogs?.map(item => (

                <DialogsRouteItems key={item.id} id={item.id} name={item.name}/>

            )): 'no data'}
        </PeopleDialogs>
    )
}