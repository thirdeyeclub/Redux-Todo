
export const TODO = 'TODO';

export const add2do = newTodo => {
    return{
        type: TODO,
        payload: newTodo}
    
}
