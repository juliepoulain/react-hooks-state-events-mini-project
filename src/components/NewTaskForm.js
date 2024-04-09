import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const initialData = {
    category: "Code",
    text: "",
  }

  const [newTask, setNewTask] = useState(initialData);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(newTask)
  }

  const category = categories.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} value={newTask.text} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} value={newTask.category} name="category">
          {category}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
