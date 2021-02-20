import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Itu Sangat menyenangkan"
    },
    {
      text: "Mari Belajar Untuk"
    },
    {
      text: "Mengasah Skills"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Itu Sangat menyenangkan"
    },
    {
      text: "Mari Belajar Untuk"
    },
    {
      text: "Mengasah Skills"
    },
    {
      text: "Mari Belajar Untuk"
    },
    {
      text: "Mengasah Skills"
    },
    {
      text: "Mari Belajar Untuk"
    },
    {
      text: "Mengasah Skills"
    },
    {
      text: "Mari Belajar Untuk"
    },
    {
      text: "Mengasah Skills"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Itu Sangat menyenangkan"
    },
    {
      text: "Mari Belajar Untuk"
    },
    {
      text: "Mengasah Skills"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Itu Sangat menyenangkan"
    },
    {
      text: "Mari Belajar Untuk"
    },
    {
      text: "Mengasah Skills"
    },
    {
      text: "Mari Belajar Untuk"
    },
    {
      text: "Mengasah Skills"
    },
    {
      text: "Mari Belajar Untuk"
    },
    {
      text: "Mengasah Skills"
    },
    {
      text: "Mari Belajar Untuk"
    },
    {
      text: "Mengasah Skills"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
