import { combineReducers } from 'redux';
import palette from './palette';
import playlist from './playlist';
import user from './user_reducer';

const rootReducer = combineReducers({
    palette,
    playlist,
    //user,
});

export default rootReducer;