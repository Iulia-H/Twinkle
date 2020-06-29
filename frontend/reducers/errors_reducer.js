import sessionErrorsReducer from "./session_errors_reducer";
import tagErrorsReducer from "./tags_errors_reducer";
import commentErrorsReducer from "./comments_errors_reducer";
import photoErrorsReducer from "./photos_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    tag: tagErrorsReducer,
    comment: commentErrorsReducer,
    photo: photoErrorsReducer
});

export default errorsReducer;