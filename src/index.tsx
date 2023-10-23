import {render} from "react-dom";
import {App} from './components/App';
import {Global} from './styles/global';
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "./BLL/redux-store";
import {Provider} from "react-redux";


const renderEntireTree = () => {
    // React-DOM Render
    render(
      <Provider store={store}>

          <Router>

              <Global/>
              <App/>
          </Router>

      </Provider>,


        document.getElementById('root'),
        () => console.log('App started...')
    )
}
renderEntireTree()
store.subscribe(renderEntireTree)



