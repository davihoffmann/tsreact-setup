import { combineReducers } from 'redux';
import auth from '../../modules/Auth/store';

const rootReducer = combineReducers({
    auth,
});

export default rootReducer;
