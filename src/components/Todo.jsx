import React from "react";
import PropTypes from "prop-types";

const Todo = (props) => {
  return [
    <section className="todos">
      <div className="todo">
        <span className="todo-text">{props.text}</span>
      </div>
    </section>
  ];
};

Todo.PropTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
