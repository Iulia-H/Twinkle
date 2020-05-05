import usersReducer from "./users_reducer";
import photosReducer from "./photos_reducer";
import { combineReducers } from "redux";


const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: photosReducer
});

export default entitiesReducer;