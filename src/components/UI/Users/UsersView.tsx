import {FC, memo, ReactNode} from "react";
import { UsersResponseItems } from "../../../BLL/api/usersAPI";
import Button from "../../../service-components/Button/Button";
import { View } from "../../../service-components/View/View";
import Wrapper from "../../../service-components/Wrapper/SectionWrapper";
import { Avatar } from "../Profile/Avatar";
import Text from "../../../service-components/Text/Text";
import {NavLink} from "react-router-dom";
import {authResponse} from "../../../BLL/api/authAPI";

type UsersViewProps = {
     currentPage: number;
     auth: authResponse
     getPageCount: (usersCount?: number) => () => number[];
     error: string | null;
     userItems:  UsersResponseItems[] | undefined;
     followUsers: (id: number) => void
     unfollowUsers: (id: number) => void
     renderSpinner: (isFetching?: boolean) => ReactNode
     isFetching: boolean
     nextPage: (page: number) => () => void
}

export const UsersView: FC<UsersViewProps> = memo(({currentPage, unfollowUsers, auth, renderSpinner, isFetching, nextPage, getPageCount, error, userItems, followUsers}) => {

     const pages = getPageCount(10)

     return (
          <>
               <Text type="h2">Users</Text>
               {currentPage}


               <Wrapper _margin="0px 0px 50px 0px" gap="20px" _justify="center">

                    {pages().map((page) => (

                         <Text
                              key={page}
                              onClick={nextPage(page)}
                              className={currentPage === page ? 'selected page' : 'page'}
                              font_weight={500}
                              font_size="20px"
                              type="span">{page}
                         </Text>
                    ))}



               </Wrapper>


               {error ? error :
                    <View id={'users'}>
                         {isFetching ? renderSpinner() : userItems?.map(u => (
                              <Wrapper _margin={'0px 0px 30px 0px'} gap={'30px'} key={u.id}>
                                   <Wrapper gap={'10px'} _direction={'column'}>
                                       <NavLink to={`/profile/${u.id}`}>
                                           <Avatar width={100} />
                                       </NavLink>
                                        <Button
                                             disabled={!auth.isAuth || u.followingInProgress}
                                             text={u.followed ? 'Unfollow' : 'Follow'}
                                             onClickHandler={() => u.followed ? unfollowUsers(u.id) : followUsers(u.id)}
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
                    </View>
               }




          </>
     )
})