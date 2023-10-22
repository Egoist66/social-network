import ReactDOM from 'react-dom';
import {App} from './components/App';
import {Global} from './styles/global';
import {BrowserRouter as Router} from "react-router-dom";
import {Store} from "./BLL/store";


const renderEntireTree = () => {
    ReactDOM.render(
        <Router>

            <Global/>
            <App/>
        </Router>,


        document.getElementById('root'),
        () => console.log('App started...')
    )
}
renderEntireTree()


Store.subscribe(renderEntireTree)

// и вся магия)


