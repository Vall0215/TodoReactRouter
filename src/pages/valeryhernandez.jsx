import { useMemo, useState } from "react";
import "../App.css";

const Valeryhernandez = () => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [removingIds, setRemovingIds] = useState([]);

    const pendingTasks = useMemo(
        () => tasks.filter((task) => !task.completed).length,
        [tasks]
    );

    const completedTasks = useMemo(
        () => tasks.filter((task) => task.completed).length,
        [tasks]
    );

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if (newTask.trim() === "") return;

        const task = {
            id: Date.now(),
            title: newTask.trim(),
            completed: false,
        };

        setTasks([...tasks, task]);
        setNewTask("");
    };

    const removeWithAnimation = (taskId) => {
        setRemovingIds((prev) => [...prev, taskId]);

        setTimeout(() => {
            setTasks((prev) => prev.filter((task) => task.id !== taskId));
            setRemovingIds((prev) => prev.filter((id) => id !== taskId));
        }, 280);
    };

    const deleteTask = (taskId) => {
        removeWithAnimation(taskId);
    };

    const toggleTask = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
        );

        setTasks(updatedTasks);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    };

    return (
        <section className="todo-page">
            <div className="todo-card">
                <div className="todo-header">
                    <span className="todo-badge">React Router Project</span>
                    <h1>Task Manager</h1>
                    <p>
                        Organize your daily activities quickly and easily; here you can 
                        download as many ideas as you like.
                    </p>
                </div>

                <div className="todo-input-container">
                    <input
                        type="text"
                        placeholder="Write your brain dump here..."
                        value={newTask}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={addTask}>Save</button>
                </div>

                <div className="todo-stats">
                    <div className="stat-card pending">
                        <span className="stat-icon">⏳</span>
                        <div className="stat-info">
                            <strong>{pendingTasks}</strong>
                            <span>pending</span>
                        </div>
                    </div>

                    <div className="stat-card completed">
                        <span className="stat-icon">✓</span>
                        <div className="stat-info">
                            <strong>{completedTasks}</strong>
                            <span>completed</span>
                        </div>
                    </div>
                </div>

                <div className="tasks-container">
                    {tasks.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-state-icon">◎</div>
                            <p>There's nothing here yet. Add your Brain Dumps and you'll see them here.</p>
                        </div>
                    ) : (
                        tasks.map((task) => (
                            <article
                                className={`task-item ${task.completed ? "completed" : ""} ${
                                    removingIds.includes(task.id) ? "removing" : ""
                                }`}
                                key={task.id}
                            >
                                <div className="task-content">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTask(task.id)}
                                    />
                                    <p>{task.title}</p>
                                </div>

                                <button
                                    className="delete-button"
                                    onClick={() => deleteTask(task.id)}
                                >
                                    Delete
                                </button>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Valeryhernandez;