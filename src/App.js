import React, { Component } from 'react';
import './App.css'
import { TodoList } from './TodoList.js'
import newId from './newid.js'
import styled from 'styled-components'
//let hash = require('object-hash');

const StyledList = styled.ul`
display: flex;
flex-direction: row;
flex-flow: row wrap;
margin: 5rem;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoLists: [
        {
          id: '1'
        }
      ],
    }
  }
  handleCreateTodoList = () => {
    const nextState = {...this.state}
    nextState.todoLists.push({
      id: newId(),
    });
    this.setState(nextState)
  }

  render() {
    return (
      <StyledList>
        {this.state.todoLists.map((todoList) => {
           return (
             <li key={todoList.id}>
               <TodoList
               />
              </li>
             );
         })}
        <input
          type="button"
          value="new todo list"
          onClick={this.handleCreateTodoList}
        />
      </StyledList>
    );
  }
}

export default App;
