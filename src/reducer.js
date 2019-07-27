import * as constants from './constants';
const initialState = {
    quotes:[]
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case constants.API_CALL_SUCCESS:
        return {...state,quotes:[...state.quotes,action.payload]};
        case constants.API_CALL_FAILURE:
        return state;
        default:
        return state;
    }
}
export default reducer;