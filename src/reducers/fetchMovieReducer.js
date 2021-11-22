import * as t from "../types"


const defaultState = () => ({
    isLoading: false,
    data: {},
    error: null
})

const fetchMovieReducer = (state, action) => {
    if (state === undefined){
        return defaultState()
    }

    switch (action.type){
        case t.FETCH_MOVIE:
            return {
                isLoading: true,
                data: {},
                error: null
            }
        case t.FETCH_MOVIE_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                error: null
            }
        case t.FETCH_MOVIE_FAILURE:
            return{
                isLoading: false,
                data: {},
                error: action.error
            }
        default:
            // console.log('Default state is triggered')
            return state
    }
}

export default fetchMovieReducer