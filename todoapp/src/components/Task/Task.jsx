import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import style from "./task.module.css";

//{title:"task 1",done:false,color:"#22d5fe"},
const Task = (props) => {
  const { deleteFn, task, doneFn, edetFn } = props;
  const [more, setMore] = useState(false);

  const moreInfouOpen = () => {
    setMore(true);
  };

  const moreInfouClose = () => {
    setMore(false);
  };

  return (
    <div
      onMouseOver={moreInfouOpen}
      onMouseLeave={moreInfouClose}
      style={{
        backgroundColor: task.completed ? "grey" : task.color,
        transition: "0.2s all",
      }}
    >
      <h1
        className="task"
        style={{ backgroundColor: task.completed ? "grey" : task.color }}
      >
        {task.title}
        <div className="icons">
          {task.completed ? (
            <AiOutlineCheckSquare onClick={doneFn} />
          ) : (
            <AiOutlineBorder onClick={doneFn} />
          )}
          <AiOutlineEdit onClick={edetFn} />
          <MdOutlineDeleteOutline onClick={deleteFn} />
        </div>
      </h1>
      {more && (
        <div className={style.details}>
          <p>description : {task.description}</p>
          <p>priority : {task.priority}</p>
          <p>date : {task.date}</p>
        </div>
      )}
    </div>
  );
};

export default Task;
