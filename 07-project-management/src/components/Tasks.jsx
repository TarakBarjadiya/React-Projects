import { useRef } from "react";
import Button from "../utils/Button";

export default function Tasks({ onTaskAdd, onDelete, taskDetail }) {
  const taskField = useRef();

  let inputClass =
    "w-2/6 p-1 outline-none bg-neutral-300 text-stone-700 font-medium rounded-l-md";
  let addTaskButtonClass =
    "p-2 font-medium bg-stone-900 text-neutral-200 hover:bg-neutral-400 hover:text-stone-900 hover:border-stone-900 rounded-r-md";
  let listContainerClass =
    "flex w-full flex-col bg-neutral-200 my-5 p-2 rounded-md overflow-auto scrollStyle";
  let liClass =
    "flex w-full justify-between px-2 my-2 hover:bg-stone-300 rounded-xl";
  let spanClass = "font-mono max-w-4xl text-lg font-semibold truncate";

  function handleAddTask() {
    const taskInput = taskField.current.value;
    if (taskInput.trim() === "") {
      return;
    }
    onTaskAdd(taskInput);
    taskField.current.value = "";
  }
  return (
    <>
      <h1 className="font-bold text-3xl mt-2 text-stone-900">Tasks</h1>
      <section className="flex flex-row mt-5">
        <input className={inputClass} ref={taskField} />
        <button onClick={handleAddTask} className={addTaskButtonClass}>
          Add Task
        </button>
      </section>
      <section className={listContainerClass}>
        {taskDetail.length == 0 && <p>This project doesnt have any task.</p>}
        {taskDetail.length > 0 && (
          <ul>
            {taskDetail.map((task) => (
              <li key={task.taskId} className={liClass}>
                <span className={spanClass}>{task.taskText}</span>
                <Button
                  onClick={() => onDelete(task.taskId)}
                  style="deleteButton"
                >
                  Clear
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
