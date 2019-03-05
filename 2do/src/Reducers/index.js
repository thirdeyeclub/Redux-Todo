import {TODO} from '../Actions/index';

const initialState = { 
    title: "Taylor's ToDo List 3001"
    ,todo: []
};

function reducer(state = initialState, action){
    switch(action.type){
        case TODO: return{
            ...state,
            todo: action.payload
        }
    }
}

export default reducer;