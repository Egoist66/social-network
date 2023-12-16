import {Layout} from "./Layout/Layout";
import {FC, useEffect} from "react";
import {mobxStore} from "../mobx/mobx-counter";
import Button from "../service-components/Button/Button";
import Text from "../service-components/Text/Text";
import {mobxPostStore} from "../mobx/mobx-post";
import {observer} from "mobx-react";

export const App: FC = observer(() => {
/*
    const {getPostsAction, posts} = mobxPostStore
    const {increment, decrement, total, count} = mobxStore

    useEffect(() => {
        getPostsAction()
    }, [])

*/

    // console.log(posts?.value)
    return (

        <div className='app'>

            <Layout/>

         {/*   <Button text={'Increment'} onClickHandler={() => increment(1)} />
            <Button text={'Decrement'} onClickHandler={() => decrement(1)} />

            <Text type={'h2'}>{count}</Text>
            <Text type={'h2'}>{total}</Text>*/}

        </div>

    );
})



