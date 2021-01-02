import React, { Component } from 'react';

// Form
import { FaPlus, FaRegWindowClose } from 'react-icons/fa';

// Task
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    task: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { task } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if(task.indexOf(newTask) !== -1) return;

    const newsTasks = [...task];
    this.setState({
      task: [...newsTasks, newTask],
    });
  }
  handleChanged = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask, task } = this.state;

    return (
      <div className="main">
        <h1>Talk List</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChanged}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="task">
          {task.map((tarefa) => (
            <li key={task}>
              { task }
              <span>
                <FaEdit className="edit"/>
                <FaRegWindowClose className="delete"/>
              </span>
            </li>
          )) }
        </ul>
      </div>
    )
  }
}
