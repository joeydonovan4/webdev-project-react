import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { searchReducer } from './search.reducer';

const rootReducer = combineReducers({
    authReducer,
    searchReducer
});

export default rootReducer;