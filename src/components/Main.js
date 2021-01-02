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

  handleEdit = (e, index) => {
    console.log('Edit', index);
  }

  handleDelete = (e, index) => {
    const { task } = this.state;
    const newsTasks = [...task]
    newsTasks.splice(index, 1);

    this.setState({
      task: [...newsTasks]
    });
  }

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
          {task.map((task, index) => (
            <li key={task}>
              { task }
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />

                <FaRegWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          )) }
        </ul>
      </div>
    )
  }
}
