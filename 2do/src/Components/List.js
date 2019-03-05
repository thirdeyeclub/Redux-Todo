import React from 'react';
import {add2Do} from '../Actions/index';
import {connect} from 'react-redux';

class List extends React.Component{
    state = {
        todo: ''
    };

    handleChange = i => {
        this.setState({todo: i.target.value});
    }

    render(){
       <div>
        <ul>
            {props.todo.map((todo) => {
                 return (
                    <li key={todo.id}>
                        <p>{todo.value}</p>
                    </li>
                    ) })}
        </ul>
        <input> eohfoioiqoiefoiqfoi </input>
       </div>
    }
}

export default connect(mapStateToProps, {
    add2do
  })(List);

