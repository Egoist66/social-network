import {PureComponent, ReactNode} from "react";
import {View} from "../../../service-components/View/View";
import Text from "../../../service-components/Text/Text";
import Button from "../../../service-components/Button/Button";
import {usersAPI, UsersResponseItems} from "../../../BLL/api/useUsersAPI";
import Wrapper from "../../../service-components/Wrapper/SectionWrapper";
import {Avatar} from "../Profile/Avatar";

export interface UsersProps {
    render?: (users?: Array<UsersResponseItems>) => ReactNode,
    users?: UsersResponseItems[],
    fetchUsers: () => Promise<void>,
    followUsers: (id: number) => void

}


class Users extends PureComponent<UsersProps, any> {

    componentDidMount() {
        this.props.fetchUsers()

    }


    render(): ReactNode {

        const {users, render, followUsers} = this.props

        return (

            <>
                <h2>Users</h2>


                {render ? render(users) : (
                    <View id={'users'}>
                        {users?.map(u => (
                            <Wrapper _margin={'0px 0px 30px 0px'} gap={'30px'} key={u.id}>
                                <Wrapper gap={'10px'} _direction={'column'}>
                                    <Avatar width={100}/>
                                    <Button
                                        text={u.followed ? 'Follow' : 'Unfollow'}
                                        onClickHandler={() => followUsers(u.id)}
                                    />
                                </Wrapper>
                                <Wrapper _direction={'column'}>
                                    <Text _margin={'0px'} type={'h2'}>{u.name} id - {u.id}</Text>
                                    <Text _margin={'10px 0px 0px 0px'} type={'p'}>{u.status}</Text>

                                </Wrapper>
                                <Text type={'p'}>
                                    <Text type={'span'}>{''}</Text>
                                    <br/>
                                    <Text type={'span'}>{''}</Text>
                                </Text>

                            </Wrapper>
                        ))}
                    </View>)}


            </>
        )


    }
}


export default Users