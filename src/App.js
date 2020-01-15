import React, { Component } from 'react';
import './App.css'
import { TodoList } from './TodoList.js'
import newId from './newid.js'
import styled from 'styled-components'
//let hash = require('object-hash');

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
      <ul>
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
      </ul>
    );
  }
}

export default App;
