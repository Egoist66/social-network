import { Layout } from "./Layout/Layout";
import { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppSelector } from "../BLL/redux-store";
import Login from "./UI/Login/Login";

export const App: FC = () => {

    const { isAuth } = useAppSelector(state => state.auth)
    const navigate = useNavigate()


    useEffect(() => {

        if(!isAuth){
            navigate('/login')
        }
        

        
    }, [isAuth])

    return (

        <div className='app'>

            {!isAuth ? (
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            ) : <Layout />}



        </div>

    )
}



