import usersReducer from "./users_reducer";
import photosReducer from "./photos_reducer";
import tagsReducer from "./tags_reducer";
import commentsReducer from "./comments_reducer";
import { combineReducers } from "redux";


const entitiesReducer = combineReducers({
    photos: photosReducer,
    users: usersReducer,
    comments: commentsReducer,
    tags: tagsReducer
});

export default entitiesReducer;