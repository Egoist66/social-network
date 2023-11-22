import {FC} from "react";


type UserProps = {
    name: string
}

function withComponent(Component: FC<UserProps>){
    return (props: UserProps & {lastname: string}) => {
        return <Component {...props} />
    }
}
const User: FC<any> = ({name, lastname}) => {
    return (
        <h2>{name} {lastname}</h2>
    )
}

const BoundUser = withComponent(User)