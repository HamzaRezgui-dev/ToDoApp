import React, { useEffect, useState } from "react";
import AddModal from "../AddModal/AddModal";
import Task from "../Task/Task";
import {
  getTasks,
  deleteTask,
  doneUndone,
} from "../../services/TodoCruds.service";
import UpdateModal from "../UpdateModal/UpdateModal";

const colors = ["#22d5fe", "#f46918", "#593bab", "#ff13e1"];

const ToDo = () => {
  const [modal, setModal] = useState({
    color: "#22d5fe",
    open: false,
    title: "",
  });

  const [tasks, setTasks] = useState([]);

  const [taskToUpdate, setTaskToUpdate] = useState(null);

  useEffect(() => {
    getTasks(setTasks);
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const changeTitle = (event) => {
    setModal({ ...modal, title: event.target.value });
  };

  const changeColor = (color) => {
    setModal({ ...modal, color: color });
  };

  const OpenModal = () => {
    if (modal.title === "") {
      alert("write a title");
    } else {
      setModal({ ...modal, open: true });
    }
  };

  const CloseModal = () => {
    setModal({ ...modal, open: false, title: "" });
  };

  return (
    <div className="todo">
      {modal.open && (
        <AddModal modal={modal} setTasks={setTasks} handleClose={CloseModal} />
      )}
      {taskToUpdate && (
        <UpdateModal
          modal={modal}
          setTasks={setTasks}
          handleClose={() => {
            setTaskToUpdate(null);
          }}
          taskToUpdate={taskToUpdate}
        />
      )}

      <h2 className="title">what's the plan for today ?</h2>
      <div className="colors">
        {colors.map((color, id) => {
          return (
            <span
              className="color"
              key={id}
              style={{ backgroundColor: color }}
              onClick={() => {
                changeColor(color);
              }}
            />
          );
        })}
      </div>

      <div className="form">
        <input
          style={{ border: `solid 2px ${modal.color}` }}
          type="text"
          phaceholder="do you have a new task ?"
          onChange={changeTitle}
          value={modal.title}
        />
        <button
          style={{
            border: `solid 2px ${modal.color}`,
            backgroundColor: modal.color,
          }}
          onClick={OpenModal}
        >
          Add
        </button>
      </div>

      <div className="taskes">
        {tasks.map((task, id) => {
          return (
            <Task
              doneFn={() => {
                doneUndone(task, setTasks);
              }}
              deleteFn={() => {
                deleteTask(task, setTasks);
              }}
              edetFn={() => {
                setTaskToUpdate(task);
              }}
              key={id}
              task={{ ...task, color: modal.color }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
