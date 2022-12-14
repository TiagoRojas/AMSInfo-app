import { combineReducers, createStore, applyMiddleware } from 'redux';
import { categoryReducer, dataReducer } from './reducers';
import thunk from 'redux-thunk';

let middlewares = [thunk];

// category: categoryReducer,
// data: dataReducer,
const rootReducer = combineReducers({
    dataReducer,
});
export default createStore(rootReducer, applyMiddleware(...middlewares));
