import React, { Component } from 'react';

// Form
import { FaPlus, FaRegWindowClose } from 'react-icons/fa';

// Task
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    task: [
      'Fazer café',
      'Beber água',
      'Estudar',
    ],
  };

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

        <form action="#" className="form">
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
              <div>
                <FaEdit className="edit"/>
                <FaRegWindowClose className="delete"/>
              </div>
            </li>
          )) }
        </ul>
      </div>
    )
  }
}
