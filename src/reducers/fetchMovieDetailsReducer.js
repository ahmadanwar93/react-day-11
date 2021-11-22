import * as t from "../types";

const defaultState = () => ({
    isLoading: false,
    data: {},
    error: null
})


const fetchMovieDetailsReducer = (state,action) =>{
    if (state === undefined){
        return defaultState()
    }

    switch (action.type){
        case t.FETCH_MOVIE_DETAILS:
            return {
                isLoading: true,
                data: {},
                error: null
            }
        case t.FETCH_MOVIE_DETAILS_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                error: null
            }
        case t.FETCH_MOVIE_DETAILS_FAILURE:
            return{
                isLoading: false,
                data: {},
                error: action.error
            }
        default:
            return state
    }
}


export default fetchMovieDetailsReducer