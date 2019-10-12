import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();


function fancyLog() {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
    console.log(store.getState());
}
