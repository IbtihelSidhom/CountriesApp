import { createStore, compose} from "redux";
import reducer from "../reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers();

const store = createStore(reducer, enhancer);

export default store;