import {Layout} from "./Layout/Layout";
import {FC} from "react";

export const App: FC = () => {
    console.log('App rerendering...')

    return (

        <div className='app'>

            <Layout/>

        </div>

    );
}



