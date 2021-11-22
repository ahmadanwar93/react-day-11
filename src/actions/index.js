import * as t from '../types';
import axios from "axios";

export const increase = () => (dispatch) => {
    dispatch({
        type: t.INCREASE,
        // payload: 
    })
}
export const decrease = () => (dispatch) => {
    dispatch({
        type: t.DECREASE,
        // payload: 
    })
}

export const fetchMovie = (data) => (dispatch) =>{
    // data is the parameter kita search
    dispatch({
        type: t.FETCH_MOVIE,
        payload: data,
    })

    try {
        axios.get(`https://www.omdbapi.com/?apikey=9c37fa59&s=${data}&page=1`).then((res)=>{
            console.log('res...',res)
            if (res.status === 200 && res.data.Response === "True"){
                dispatch({
                    type: t.FETCH_MOVIE_SUCCESS,
                    payload: res.data
                })
            }else{
                alert(res.data.Error)
            }
        })
        .catch((error)=>{
            console.log('error....1');
            // , error.response.data.Error
            dispatch ({
                type: t.FETCH_MOVIE_FAILURE,
                error: "error"
                // error.response.data.Error,
            })
        })
    }catch(error){
        console.log('error....2' ,error);
        dispatch({
            type: t.FETCH_MOVIE_FAILURE,
            error: "error"
        })
    }

}


export const fetchMovieDetails = (data) => (dispatch) => {
    dispatch ({
        type: t.FETCH_MOVIE_DETAILS
    })


    try {
        axios.get(`https://www.omdbapi.com/?apikey=9c37fa59&i=${data}`)
        .then((res) => {
            if(res.status === 200){
                // console.log('res')
                dispatch({
                    type:t.FETCH_MOVIE_DETAILS_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch((error) => {
            console.log('error', error);
            dispatch({
                type:t.FETCH_MOVIE_DETAILS_FAILURE,
                error: "error.response.data"
            })
        })

    }catch(error){
        console.log('error2...',error);
        dispatch({
            type:t.FETCH_MOVIE_DETAILS_FAILURE,
            error: "error.response.data"
        })
    }
}