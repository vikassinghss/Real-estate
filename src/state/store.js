import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "../state/reducers/index"

export const store = createStore(reducers , {} , composeWithDevTools( applyMiddleware(thunk) ));