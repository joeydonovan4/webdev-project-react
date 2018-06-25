import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { searchReducer } from './search.reducer';
import { registerReducer } from './register.reducer';
import { adminReducer } from './admin.reducer';

const rootReducer = combineReducers({
    authReducer,
    searchReducer,
    registerReducer,
    adminReducer
});

export default rootReducer;