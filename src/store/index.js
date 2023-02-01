import { combineReducers, createStore, applyMiddleware } from 'redux';
import { dataReducer, appConfigReducer } from './reducers';
import thunk from 'redux-thunk';

let middlewares = [thunk];

const rootReducer = combineReducers({
    dataReducer,
    appConfigReducer,
});
export default createStore(rootReducer, applyMiddleware(...middlewares));
