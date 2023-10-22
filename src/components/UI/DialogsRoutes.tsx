import {FC} from "react";
import {styled} from "styled-components";
import {DialogsRouteItems} from "./DialogsRouteItems";
import {DialogsProps} from "./Dialogs";


const PeopleDialogs = styled.ul`

`


export const DialogsRoutes: FC<DialogsProps> = ({dialogsData}) => {

    return (
        <PeopleDialogs className={'dialogs'}>
            {dialogsData ? dialogsData?.map(item => (

                <DialogsRouteItems key={item.id} id={item.id} name={item.name}/>

            )): 'no data'}
        </PeopleDialogs>
    )
}