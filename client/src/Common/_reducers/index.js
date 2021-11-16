import { combineReducers } from 'redux';
import user from './user_reducer';
import playlist from './playlist';

const rootReducer = combineReducers({
    // playlist,
    user,
});

export default rootReducer;