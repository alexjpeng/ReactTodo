import React, { Component } from 'react';
import styled from 'styled-components'

const DeleteButton = styled.input`
  border: 2px solid;
  color: red;
  background:
`

export class TodoItem extends Component {
  render() {
    return (
      <li>
        <input 
          type="checkbox" 
          checked={this.props.isCompleted} 
          onChange={this.props.handleCheckboxChange} 
        /> 
        <input 
          type="text" 
          value={this.props.title}
          onChange={this.props.handleTextChange}
        />
        <DeleteButton
          type="button"
          value="delete"
          onClick={this.props.handleDelete}
        /> 
      </li>
    );
  }
}