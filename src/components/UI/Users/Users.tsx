import { PureComponent, ReactNode } from "react";
import { View } from "../../../service-components/View/View";
import Text from "../../../service-components/Text/Text";
import Button from "../../../service-components/Button/Button";
import { usersAPI, UsersResponseItems } from "../../../BLL/api/useUsersAPI";
import Wrapper from "../../../service-components/Wrapper/SectionWrapper";
import { Avatar } from "../Profile/Avatar";
import { UsersTypeState } from "../../../BLL/reducers/users-reducer";

export interface UsersProps {
    userItems?: UsersResponseItems[],
    totalCount: number,
    usersCount: number,
    currentPage: number,
    error: string | null,
    fetchUsers: (usersCount: number, currentPage: number) => Promise<void>,
    followUsers: (id: number) => void

}

interface UsersState {
    currentPage: number;
    pageSize: number
}


class Users extends PureComponent<UsersProps, UsersState> {

    nextPage = (page: number) => {
        return () => {
            this.props.fetchUsers(this.props.usersCount, page)

        }
    }

    componentDidMount() {
        this.props.fetchUsers(3, this.props.currentPage)

    }

    componentDidUpdate(prevProps: Readonly<UsersProps>): void {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.nextPage(this.props.currentPage)
        }
    }


    render(): ReactNode {

        const { userItems, totalCount, usersCount, currentPage, followUsers, error} = this.props

        let pagesCount = totalCount / usersCount
        let pages = []
        for(let i = 1; i <= Math.ceil(pagesCount); i++){
            pages.push(i)

            if(i === 10){
                break
            }
        }

        return (

            <>
                <Text type="h2">Users</Text>
                {currentPage}


                <Wrapper _margin="0px 0px 50px 0px" gap="20px" _justify="center">

                    {pages.map((page) => (

                        <Text
                        key={page}
                        onClick={this.nextPage(page)}
                        className={this.props.currentPage === page ? 'selected' : ''}
                        font_weight={500}
                        font_size="20px"
                        type="span">{page}</Text>
                    ))}

                

                </Wrapper>


                {error ? error :  <View id={'users'}>
                    {userItems?.map(u => (
                        <Wrapper _margin={'0px 0px 30px 0px'} gap={'30px'} key={u.id}>
                            <Wrapper gap={'10px'} _direction={'column'}>
                                <Avatar width={100} />
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
                                <br />
                                <Text type={'span'}>{''}</Text>
                            </Text>

                        </Wrapper>
                    ))}
                </View>}

               


            </>
        )


    }
}


export default Users