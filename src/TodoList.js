import React, { Component } from 'react';
import newId from './newid.js'
import { TodoItem } from './TodoItem.js'
import styled from 'styled-components'


export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {
        "asdf": {
          id: 'asdf',
          title: 'test1',
          isCompleted: false,
        },
        "asdf1": {
          id: 'asdf1',
          title: 'test2',
          isCompleted: true,
        },
      }
    }
  }
  
  handleCheckboxChange = (toDoItem) => {
    return () => {
      const nextTodos = {...this.state.todos};
      nextTodos[toDoItem.id].isCompleted = !nextTodos[toDoItem.id].isCompleted
      this.setState({
        todos: nextTodos
      });
    }
  }

  handleTextChange = (toDoItem) => {
    return (e) => {
      const nextTodos = {...this.state.todos};
      const nextToDoItem = {...nextTodos[toDoItem.id]};
      nextTodos[nextToDoItem.id] = nextToDoItem;
      nextToDoItem.title = e.target.value;
      this.setState({
        todos: nextTodos
      });
    }
  }

  handleNewTodo = (e) => {
    //console.log(e.target)
    e.preventDefault()
    const nextTodos = {...this.state.todos};
    const newTodoItem = {
      id: newId(),
      title: e.target[0].value,
      checked: false,
    }
    nextTodos[newTodoItem.id] = newTodoItem;
    this.setState({
      todos: nextTodos
    })
    e.target[0].value = '';
  }

  handleDelete = (toDoItem) => {
    return () => {
      const nextTodos = {...this.state.todos};
      delete nextTodos[toDoItem.id]
      console.log(toDoItem);
      //nextTodos.splice(index, 1);
      this.setState({
        todos: nextTodos
      });
    }
  }
  
  render() {
    console.log(this.state);
    return (
      <ul>  
        {Object.keys(this.state.todos).map((todoItemId) => {
          const todoItem = this.state.todos[todoItemId];
           return (
             <li key={todoItem.id}>
               <TodoItem
                  id={todoItem.id}
                  title={todoItem.title}
                  isCompleted={todoItem.isCompleted}
                  handleDelete={this.handleDelete(todoItem)}
                  handleTextChange={this.handleTextChange(todoItem)}
                  handleCheckboxChange={this.handleCheckboxChange(todoItem)}
               />
              </li>
             );
         })}
         <form onSubmit={this.handleNewTodo}>
           <input type="text" placeholder="New todo item"/> 
         </form>
      </ul>
    );
  }
}
