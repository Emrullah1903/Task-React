import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description for Task 1" },
    { id: 2, title: "Task 2", description: "Description for Task 2" },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="App">
      <div className="task-form">
        <h1>Lütfen Task Ekleyiniz!</h1>
        <input
          type="text"
          placeholder="Başlık giriniz"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task açıklaması"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTask}>Oluştur</button>
      </div>

      <div className="task-list">
        <h2>Görevler</h2>
        <h3>Görev Listesi</h3>
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
