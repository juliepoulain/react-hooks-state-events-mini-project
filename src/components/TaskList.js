
import Task from "./Task";

function TaskList({tasks, deleteTask}) {

  const taskCard = tasks.map((task) => {
    return (
      <Task
        key={task.text}
        category={task.category}
        text={task.text}
        deleteTask={() => deleteTask(task)}
      />
    );
  });

  return <div className="tasks">{taskCard}</div>;
}

export default TaskList;
