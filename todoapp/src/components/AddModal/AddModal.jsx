import React, { useState, useEffect } from "react";
import style from "./AddModal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { addTask } from "../../services/TodoCruds.service";

function AddModal({ modal, handleClose, setTasks }) {
  const { title, color } = modal;
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: 1,
    date: new Date(),
    completed: false,
  });

  useEffect(() => {
    setNewTask({ ...newTask, title: title });
  }, [modal]);

  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const finalStep = (newdata) => {
    setTasks(newdata);
    handleClose();
  };

  const handleSubmit = () => {
    addTask(newTask, finalStep);
  };

  return (
    <div className={style.main}>
      <div className={style.modal_container}>
        <h1 className={style.title}> {title} </h1>

        <div className={style.form}>
          <textarea
            placeholder="Description"
            name="description"
            style={{ border: `solid 2px ${color}` }}
            rows={6}
            value={newTask.description}
            onChange={handleChange}
          />

          <select
            name="priority"
            value={newTask.priority}
            onChange={handleChange}
            style={{ border: `solid 2px ${color}` }}
          >
            <option value={1}>Priority : 1</option>
            <option value={2}>Priority : 2</option>
            <option value={3}>Priority : 3</option>
            <option value={4}>Priority : 4</option>
            <option value={5}>Priority : 5</option>
          </select>

          <input
            name="date"
            value={newTask.date}
            style={{ border: `solid 2px ${color}` }}
            type="datetime-local"
            placeholder="DATE"
            onChange={handleChange}
          />
        </div>

        <button
          className={style.create_button}
          style={{ backgroundColor: `${color}` }}
          onClick={handleSubmit}
        >
          CREATE
        </button>

        <div className={style.close}>
          <AiOutlineClose onClick={handleClose} />
        </div>
      </div>
    </div>
  );
}

export default AddModal;
