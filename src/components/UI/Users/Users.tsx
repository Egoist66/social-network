import {FC, ReactNode, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../BLL/redux-store";
import {UsersData} from "../../../BLL/reducers/users-reducer";
import {View} from "../../../service-components/View/View";
import Text from "../../../service-components/Text/Text";
import Button from "../../../service-components/Button/Button";
import {FOLLOW_USER} from "../../../BLL/actions";
import {useActions} from "../../../hooks/useActions";
import {usersApi} from "../../../BLL/api/users-api";
import Wrapper from "../../../service-components/Wrapper/SectionWrapper";
import {Avatar} from "../Profile/Avatar";

type UsersProps = {
    render?: (arg?: Array<UsersData>) => ReactNode

}

const Users: FC<UsersProps> = ({render}) => {

    const {users} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    useEffect(usersApi.fetchUsers(dispatch), [])

    return (
        <>
            <h2>Users</h2>

            {render ? render(users) : <View>
                {users.map(u => (
                    <Wrapper _margin={'0px 0px 30px 0px'} gap={'30px'} key={u.id}>
                        <Wrapper gap={'10px'} _direction={'column'}>
                            <Avatar width={100}/>
                            <Button
                                text={u.followed ? 'Follow' : 'Unfollow'}
                                onClickHandler={usersApi.followUsers(dispatch, u.id)}
                            />
                        </Wrapper>
                        <Wrapper _direction={'column'}>
                            <Text _margin={'0px'} type={'h2'}>{u.fullName} id - {u.id}</Text>
                            <Text _margin={'10px 0px 0px 0px'} type={'p'}>{u.status}</Text>

                        </Wrapper>
                        <Text type={'p'}>
                            <Text type={'span'}>{u.location.country},</Text>
                            <br/>
                            <Text type={'span'}>{u.location.city}</Text>
                        </Text>

                    </Wrapper>
                ))}
            </View>}


        </>
    )


}

export default Users