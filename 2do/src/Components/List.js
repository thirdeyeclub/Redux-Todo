import React from 'react';
import {add2Do} from '../Actions/index';
import {connect} from 'react-redux';

class List extends React.Component{
    constructor(){
        super();
    state = {
        todo: ''
    };}

    handleChange = i => {
        this.setState({todo: i.target.value});
    }

    render(){
       
            {props.todo.map((todo) => {
                 return (
                    <div>
                    <ul>
                    <li key={todo.id}>
                        <p>{todo.value}</p>
                    </li>
                    ) })}
        </ul>
        <input> </input>
       </div>
    }
}

export default connect(mapStateToProps, {
    add2do
  })(List);

