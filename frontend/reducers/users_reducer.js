import { RECEIVE_CURRENT_USER, DELETE_USER} from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case DELETE_USER:
            const newState = Object.assign({}, state);
            delete newState[action.user.id];
            return newState;
        case RECEIVE_USER:
            return Object.assign({}, state, { user: action.user });
        default:
            return state;
    }
};
export default usersReducer;