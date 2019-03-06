import React from 'react';
import {add2Do} from '../Actions/index';
import {connect} from 'react-redux';
import styled from 'styled-components';

//styles
const UberList = styled.div `
display: flex;
flex-direction: column;
max-width: 420px;
margin: 13% auto;
position: flex;
color: '';
font-family: 'Times New Roman', Times, serif;
border-top: solid  #ffffff 20px;
border-right: solid  #909090  20px;
border-bottom: solid  #424242 15px;
border-left: solid #FFFFFF 30px;
border-radius: 33px;
box-shadow: ;
box-shadow: 49px 64px 89px 5px rgba(0,0,0,0.75),-59px -69px 300px 24px rgba(194,194,81,1);
padding: 1.8% 1.8%;
`
const Button = styled.button`

margin: 20px 0px;
width: 420px;`
//adios!

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
        <UberList>
            <h1>Todo List 2.0</h1>
            <input 
            type="text" 
            name="todo" 
            onChange={this.handleChange}
            placeholder="...add new" 
            value={this.state.todo}/>
        <Button onClick={this.handleNew}>ADD</Button>
        </UberList>    
                    
                );}
                }

    
const mapStateToProps = state => ({
todo: state.todo
});

export default connect(mapStateToProps, {
    add2Do})(List);

