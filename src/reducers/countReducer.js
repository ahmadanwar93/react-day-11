import * as t from '../types';

const countReducer = (state=0,action) =>{
    if (state === undefined){
        state = 0;
    }
    switch(action.type){
        case t.INCREASE:
            return state += 1;
        case t.DECREASE:
            return state -= 1;
        default:
            return state
    }

}

export default countReducer;