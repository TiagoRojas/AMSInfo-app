import { combineReducers, createStore, applyMiddleware } from 'redux';
import { dataReducer } from './reducers';
import thunk from 'redux-thunk';

let middlewares = [thunk];

const rootReducer = combineReducers({
    dataReducer,
});
export default createStore(rootReducer, applyMiddleware(...middlewares));
