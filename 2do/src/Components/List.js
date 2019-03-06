import React from 'react';
import {add2Do} from '../Actions/index';
import {connect} from 'react-redux';

class List extends React.Component{
    constructor(){
        super();
    this.state = {
        todo: ''
    };}

    handleChange = i => {
        this.setState({todo: i.target.value});
    }

    handleNew = i => {
        i.preventDefault();
        this.props.add2Do(this.state.todo);
        this.setState({
          todo: ""
        });
    };

    render() {
       return (
        <div className="form-list">
            <h1>Todo List 2.0</h1>
            <input type="text" name="todo" onChange={this.handleChange}
            placeholder="...add new" value={this.state.todo}/>
        <button onClick={this.handleNew}>ADD</button>
        </div>    
                    
                );}
                }
       
    
const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps, {
    add2Do
  })(List);

