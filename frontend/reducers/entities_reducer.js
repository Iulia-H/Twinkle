import usersReducer from "./users_reducer";
import photosReducer from "./photos_reducer";
import tagsReducer from "./tags_reducer";
import commentsReducer from "./comments_reducer";
import { combineReducers } from "redux";


const entitiesReducer = combineReducers({
    users: usersReducer,
    photos: photosReducer,
    tags: tagsReducer,
    comments: commentsReducer
});

export default entitiesReducer;