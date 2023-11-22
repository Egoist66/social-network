 import {instanse, UsersResponseType} from "../BLL/api/useUsersAPI";
// import {useEffect} from "react";
// import {useActions} from "./useActions";
//
// export const useUsersAPI = () => {
//
//     const {FETCH_USERS} = useActions()
//     const query = useQuery({
//         queryKey: ['users'],
//         queryFn: () => instanse.get<UsersResponseType>('/users'),
//         retry: 3,
//         select: ({data}) => data.items,
//
//     })
//
//     useEffect(() => {
//             if(query.isSuccess){
//                FETCH_USERS(query.data)
//             }
//     }, [query.isSuccess])
//
//     return {
//         ...query
//     }
//
// }
// @ts-ignore