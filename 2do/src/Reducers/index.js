import {ADD_TODO} from '../Actions/index';

const initialState = { 
    title: "Taylor's ToDo List 3001"
    ,todo: []
};

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO: return{
            ...state,
            todo: action.payload
        }
        default:
        return state
    }
}

export default reducer;