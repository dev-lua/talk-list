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
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { task, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if(task.indexOf(newTask) !== -1) return;

    const newsTasks = [...task];

    if(index === -1) {
      this.setState({
        task: [...newsTasks, newTask],
        newTask: '',
      });
    } else {
      newsTasks[index] = newTask;

      this.setState({
        task: [...newsTasks],
        index: -1,
      });
    }

  }

  handleChanged = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  handleEdit = (e, index) => {
    const { task } = this.state;

    this.setState({
      index,
      newTask: task[index],
    })
  }

  handleDelete = (e, index) => {
    const { task } = this.state;
    const newsTasks = [...task]
    newsTasks.splice(index, 1);

    this.setState({
      task: [...newsTasks]
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
