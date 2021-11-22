import { combineReducers } from "redux";
import countReducer from './countReducer';
import fetchMovieReducer from "./fetchMovieReducer";
import fetchMovieDetailsReducer from "./fetchMovieDetailsReducer";

export default combineReducers({
    count: countReducer,
    movie: fetchMovieReducer,
    movieDetails: fetchMovieDetailsReducer
})