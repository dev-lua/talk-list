import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Task.css';

export default function Task({ task, handleEdit, handleDelete }) {
  return (
    <ul className="task">
      {task.map((task, index) => (
        <li key={task}>
          { task }
          <span>
            <FaEdit
              onClick={(e) => handleEdit(e, index)}
              className="edit"
            />

            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  )
}

Task.propTypes = {
  task: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
