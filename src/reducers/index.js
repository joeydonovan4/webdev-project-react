import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { searchReducer } from './search.reducer';
import { registerReducer } from './register.reducer';

const rootReducer = combineReducers({
    authReducer,
    searchReducer,
    registerReducer
});

export default rootReducer;